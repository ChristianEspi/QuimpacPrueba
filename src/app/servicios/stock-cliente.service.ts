import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {StockCliente }from 'src/app/modelo/stock-cliente.module'

@Injectable({
  providedIn: 'root'
})
export class StockClienteService {

  constructor(private http:HttpClient) { }

    private urlConsul:string='http://192.168.1.16:8086/api/Querys/visualizarMov2';

    postClie(stockClie:StockCliente):Observable<any>{
      return this.http.post(this.urlConsul,stockClie);
    }


}
