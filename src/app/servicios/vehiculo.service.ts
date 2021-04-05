import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehiculo } from '../modelo/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  private urlCrear="http://192.168.1.16:8086/api/Admin/newVehiculo";
  private urlListar="http://192.168.1.16:8086/api/Admin/listarVehiculo";
  private urlActualizar="http://192.168.1.16:8086/api/Admin/updateVehiculo";
  constructor(private http:HttpClient) { }

  crearvehi(vehi:Vehiculo):Observable<Vehiculo>{
    return this.http.post<Vehiculo>(this.urlCrear,vehi);
  }
  actualizarVehi(vehi:Vehiculo):Observable<Vehiculo>{
    return this.http.post<Vehiculo>(this.urlActualizar,vehi);
  }
  listarVehi():Observable<Vehiculo[]>{
    return this.http.get<Vehiculo[]>(this.urlListar);
  }
}
