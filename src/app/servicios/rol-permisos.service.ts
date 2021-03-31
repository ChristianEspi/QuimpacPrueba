import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { RolPermisos } from '../modelo/rol-permisos';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RolPermisosService {
  private urllistar:string="";
  private urlnewRolpermiso:string="http://192.168.1.16:8086/api/Admin/newRolPermiso";
  private actuRolPermiso:string="http://192.168.1.16:8086/api/Admin/updateRolPermiso";
  private listaRolPermoXId:string="http://192.168.1.16:8086/api/Querys/permisoXrol";
  constructor(private http:HttpClient) { }

  getRolPermisos():Observable<RolPermisos[]>{
    return this.http.get<RolPermisos[]>(this.urllistar);
  }
  createRolPermisos(rolPermiso:any):Observable<RolPermisos>{
    return this.http.post<RolPermisos>(this.urlnewRolpermiso,rolPermiso);
  }
  getRolpermisoId(id:number):Observable<RolPermisos>{
    return this.http.get<RolPermisos>(`${this.listaRolPermoXId}/${id}`)
  }
  update(rolPermiso:any):Observable<RolPermisos>{
    return this.http.post<RolPermisos>(`${this.actuRolPermiso}`,rolPermiso)
  }
}
