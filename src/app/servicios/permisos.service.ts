import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { Permisos } from '../modelo/permisos';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PermisosService {
  private urllistar:string="http://192.168.1.16:8086/api/Admin/listarPermiso";
  constructor(private http:HttpClient) { }

  getPermisos():Observable<Permisos[]>{
    return this.http.get<Permisos[]>(this.urllistar);
  }
  createPermiso(permiso:Permisos):Observable<Permisos>{
    return this.http.post<Permisos>(this.urllistar,permiso);
  }
  getPermisoID(id:number):Observable<Permisos>{
    return this.http.get<Permisos>(`${this.urllistar}/${id}`)
  }
  update(permiso:Permisos):Observable<Permisos>{
    return this.http.get<Permisos>(`${this.urllistar}/${permiso.per_cod}`)
  }
}
