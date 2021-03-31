import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rol } from '../modelo/rol';
@Injectable({
  providedIn: 'root'
})
export class RolService {
  private urlCrearRol:string="http://192.168.1.16:8086/api/Admin/crearRol"
  private urlListarRol:string="http://192.168.1.16:8086/api/Admin/selecRol";
  private urlRolxId:string="http://192.168.1.16:8086/api/Admin/buscarRol";
  private url_ActualizarRol:string="http://192.168.1.16:8086/api/Admin/actualizarRol"
  private urlRolCod:string="http://192.168.1.16:8086/api/Admin/buscarRolXsap"
  constructor(private http:HttpClient) { }

  getRoles():Observable<Rol[]>{
    return this.http.get<Rol[]>(this.urlListarRol);
  }
  createRol(rol:Rol):Observable<Rol>{
    return this.http.post<Rol>(this.urlCrearRol,rol);
  }
  getRolCod(cod_sap:string):Observable<Rol>{
    return this.http.get<Rol>(`${this.urlRolCod}/${cod_sap}`)
  }
  getRolId(id:number):Observable<Rol>{
    return this.http.get<Rol>(`${this.urlRolxId}/${id}`)
  }
  update(rol:Rol):Observable<Rol>{
    return this.http.post<Rol>(`${this.url_ActualizarRol}`,rol);
  }
}
