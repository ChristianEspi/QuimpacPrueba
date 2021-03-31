import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders}from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clientes } from '../modelo/clientes';
import { environment} from 'src/environments/environment.prod'
@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private urlCrear ='';
  private urlListarClie = 'http://192.168.1.16:8086/api/Admin/selectClientes';
  private urllistarCod ='http://192.168.1.16:8086/api/Admin/buscarCliente';
  private urlActualizar:string='http://192.168.1.16:8086/api/Admin/actualizarCli';
  constructor(private http:HttpClient) { }

  getClientes():Observable<Clientes[]>{
    return this.http.get<Clientes[]>(this.urlListarClie);
  }

  createCliente(cliente:Clientes):Observable<Clientes>{
    return this.http.post<Clientes>(this.urlCrear,cliente);
  }

  getCliente(cod:string):Observable<Clientes>{
    return this.http.get<Clientes>(`${this.urllistarCod}/${cod}`)
  }

  getUsuaCli(id:number):Observable<Clientes>{
    return this.http.get<Clientes>(`${this.urlActualizar}/${id}`)
  }
  update(cliente:Clientes):Observable<Clientes>{
    return this.http.post<Clientes>(`${this.urlActualizar}`,cliente)
  }

}
