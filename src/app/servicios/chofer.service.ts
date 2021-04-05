import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders}from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chofer } from '../modelo/chofer';
@Injectable({
  providedIn: 'root'
})
export class ChoferService {

  private urlCrear:string="http://192.168.1.16:8086/api/Admin/newChofer";
  private urlListar:string="http://192.168.1.16:8086/api/Admin/listarChofer";
  private urlActualizar:string="http://192.168.1.16:8086/api/Admin/updateChofer";
  constructor(private http:HttpClient) { }

  crearChofer(chofer:Chofer):Observable<Chofer>{
    return this.http.post<Chofer>(this.urlCrear,chofer);
  }
  actualizarChofer(chofer:Chofer):Observable<Chofer>{
    return this.http.post<Chofer>(this.urlActualizar,chofer);
  }
  listarChofer():Observable<Chofer[]>{
    return this.http.get<Chofer[]>(this.urlListar);
  }
}
