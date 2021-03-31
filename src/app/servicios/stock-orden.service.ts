import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {StockOrden }from 'src/app/modelo/stock-orden-en'
@Injectable({
  providedIn: 'root'
})
export class StockOrdenService {

  constructor(private http:HttpClient) { }
  private urlConsul:string='http://192.168.1.16:8086/api/Querys/visualizarOrd';

  postBuscarStockOr(stockO:StockOrden):Observable<any>{
    return this.http.post(this.urlConsul,stockO);
  }

}
