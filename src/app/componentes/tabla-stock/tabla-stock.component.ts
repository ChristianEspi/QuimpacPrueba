import { HttpClient,HttpParams } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { Subject } from 'rxjs';
import { Stock } from 'src/app/modelo/stock.module';
import {StockService}from 'src/app/servicios/stock.service';
@Component({
  selector: 'app-tabla-stock',
  templateUrl: './tabla-stock.component.html',
  styleUrls: ['./tabla-stock.component.css']
})
export class TablaStockComponent implements OnInit,OnDestroy {
  @Input() data = new Array<Stock>();
  public stock:Stock;

  dtOptions: DataTables.Settings = {};
  stoc:any;
  dtTrigger = new Subject();
  constructor(private http: HttpClient, private stkScv:StockService,private actRout:ActivatedRoute) { }
  ngOnInit(): void {


    this.dtOptions = {
     pagingType: 'full_numbers',
     pageLength: 15,
     scrollX:false,
     //this.stkScv.getFilClie(this.stock.des_alm,this.stock.stk_des_mat,this.stock.stk_num_lot).subscribe()
   };
   //this.cargaStock();
  }
  /* public cargaStock():void{
      this.actRout.params.subscribe(params=>{
        let des_alm =params['des_alm']
        let des_mat = params['des_mat']
        let num_lot = params['num_lot']

        this.stkScv.getFilClie(des_alm,des_mat,num_lot).subscribe((stock)=>this.stoc=stock)
        console.log('hola');
      })
   }*/

  ngOnDestroy(): void {
  // Do not forget to unsubscribe the event
  this.dtTrigger.unsubscribe();
  }














}
