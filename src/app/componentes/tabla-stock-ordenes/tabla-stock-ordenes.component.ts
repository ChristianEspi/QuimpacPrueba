import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {StockOrdenEn}from 'src/app/modelo/stock-orden-en'
@Component({
  selector: 'app-tabla-stock-ordenes',
  templateUrl: './tabla-stock-ordenes.component.html',
  styleUrls: ['./tabla-stock-ordenes.component.css']
})
export class TablaStockOrdenesComponent implements OnInit {
  @Input() data = Array<StockOrdenEn>();
  
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.dtOptions = {
     pagingType: 'full_numbers',
     pageLength: 15,
     scrollX:false
   };
   /*this.http.get('http://dummy.restapiexample.com/api/v1/employees')
     .subscribe((res:any) => {
       this.data=res.data;
       this.dtTrigger.next();
     });*/
  }
  ngOnDestroy(): void {
  // Do not forget to unsubscribe the event
  this.dtTrigger.unsubscribe();
  }

}
