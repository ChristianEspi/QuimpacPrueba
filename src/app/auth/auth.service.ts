import { HttpClient} from '@angular/common/http';
import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {environment} from 'src/environments/environment';
import { Data, Login, LoginRespuesta, Permiso, User} from '../modelo/login';
import {catchError,map, tap} from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import {JwtHelperService} from '@auth0/angular-jwt';

const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  Rol = null;
  private loggedIn =new BehaviorSubject<boolean>(false);
  private _rutasDeRol = new BehaviorSubject<Permiso[]>([]);
  constructor(private http:HttpClient) {
  this.checkToken()
 }

 get isLogged():Observable<Boolean>{
   return this.loggedIn.asObservable();
 }

 get rutasRol$ (): Observable<Permiso[] >{
   return this._rutasDeRol.asObservable();
 }

  login(authData:Login):Observable<LoginRespuesta | void>{
    return this.http.post<LoginRespuesta>(
      'http://192.168.1.16:8086/api/Login/login',authData)
      .pipe(
        tap(resp => this._rutasDeRol.next(resp.data.permiso)),
        map((res:LoginRespuesta)=>{
          this.saveToken(res.data.token);
          console.log(this.savePermisos(res.data.permiso));
          this.saveUser(res.data.usu);
          this.loggedIn.next(true);
          return res;
        }),
        catchError((err)=>this.handlerError(err))
      );
  }

  cerrarSession():void{
    localStorage.clear()
    this.loggedIn.next(false);
  }

  private checkToken():void{
    const Token =   localStorage.getItem('token');
    //const user = JSON.parse(localStorage.getItem('user')|| null);
    //if(user){
    const isExpired = helper.isTokenExpired(Token);
        if(isExpired){
          this.cerrarSession();
        } else{
          this.loggedIn.next(true);
          //this.role.next(user.role);
        }
    //}
    //isExpired ? this.cerrarSession() : this.loggedIn.next(true);
  }

  private saveToken(token:string):void{
    //const{message,...rest} = user;
    localStorage.setItem('token',token);
    //localStorage.setItem('user',JSON.stringify(rest));
  }
  saveRol(user:LoginRespuesta):any{
      let rol = user.data.usu[0].usu_cod_rol;
      return rol;
  }
  saveCodSap(user:LoginRespuesta):any{
    let cod = user.data.usu[0].usu_cod_sap;
    return cod;
  }
  saveUser(usuario:User):any{
    localStorage.setItem('usuario',JSON.stringify(usuario));
  }
  savePermisos(permiso:Permiso[]){
      localStorage.setItem('ruta', JSON.stringify(permiso));
  }
  private handlerError(err:any):Observable<never>{
    let errorMensaje ="Ocurrio un Error en la data"
    if(err){
      errorMensaje=`Error:en el codigo${err.message}`
    }
    return throwError(errorMensaje);
  }
}
