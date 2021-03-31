import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { StockCliente,StockTbclie } from 'src/app/modelo/stock-cliente.module';
import {StockClienteService } from 'src/app/servicios/stock-cliente.service'
@Component({
  selector: 'app-tabla-stock-cliente',
  templateUrl: './tabla-stock-cliente.component.html',
  styleUrls: ['./tabla-stock-cliente.component.css']
})
export class TablaStockClienteComponent implements OnInit {
  @Input() data = new Array<StockTbclie>();
  @Input() dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
     pagingType: 'full_numbers',
     pageLength: 15,
     scrollX:false
   };
   //this.http.get('http://dummy.restapiexample.com/api/v1/employees')
  //   .subscribe((res:any) => {
  //     this.data=res.data;
  //     this.dtTrigger.next();
  //   });
  //this.stkCli.postClie(this.mStockClie).subscribe((data)=>{
  //  console.log(data);
  //});


  }
  ngOnDestroy(): void {
  // Do not forget to unsubscribe the event
  this.dtTrigger.unsubscribe();
  }

}
