import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from '../modelo/stock.module';
@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http:HttpClient) { }
  private urlStock:string='http://192.168.1.16:8086/api/Querys/listaStockXCliente'

  getStock(stock:Stock):Observable<any>{
    return this.http.post(this.urlStock,stock);
  }
}
