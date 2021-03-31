import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { Usuarios } from '../modelo/usuarios';
import { Observable } from 'rxjs';
import { User } from '../modelo/login';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private urlCrear:string='http://192.168.1.16:8086/api/Admin/newusu';
  private urllistar:string='';
  private urllistarUsuClie:string='http://192.168.1.16:8086/api/Querys/usuarioXCliente'
  private urlUsarioCod:string = 'http://192.168.1.16:8086/api/Admin/buscarUsu'
  private urlActualizar:string = 'http://192.168.1.16:8086/api/Admin/actualizarUsu';
  constructor(private http:HttpClient) { }

  getUsuarios():Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>(this.urllistar);
  }
  createUsuario(usuario:Usuarios):Observable<Usuarios>{
    return this.http.post<Usuarios>(this.urlCrear,usuario);
  }

  getUsuario(id:number):Observable<Usuarios>{
    return this.http.get<Usuarios>(`${this.urllistarUsuClie}/${id}`)
  }
  /*Obtener Usuario x Id*/
  getUsuarioCod(cod:string):Observable<Usuarios>{
    return this.http.get<Usuarios>(`${this.urlUsarioCod}/${cod}`)
  }

  update(usuario:Usuarios):Observable<any>{
    return this.http.post(`${this.urlActualizar}`,usuario);
  }

  login(user:User): Observable<User[]> {
    return this.http.post<User[]>("http://192.168.1.16:8086/api/Login/login",user);
  }
}
