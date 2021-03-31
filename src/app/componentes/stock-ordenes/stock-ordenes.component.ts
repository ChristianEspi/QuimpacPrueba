import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { StockOrden, StockOrdenEn } from 'src/app/modelo/stock-orden-en';
import { StockOrdenService }from 'src/app/servicios/stock-orden.service'
@Component({
  selector: 'app-stock-ordenes',
  templateUrl: './stock-ordenes.component.html',
  styleUrls: ['./stock-ordenes.component.css']
})

export class StockOrdenesComponent implements OnInit {

  private subscription:Subscription= new Subscription();
  enviaOrden = this.fb.group({
    des_mat:[''],
    val_2:[''],
    ori:[''],
    des:[''],
    est:[''],
    fec_pla_ini_des:[''],
    fec_pla_ini_has:[''],
    fec_rea_ini_des:[''],
    fec_rea_ini_has:[''],
  });
  constructor(private fb:FormBuilder ,private stkOrde:StockOrdenService) { }
  stockOrden= new StockOrdenEn();
  ngOnInit(): void {

  }
  buscarStockOrden(){
      const formvalue = this.enviaOrden.value;
      if(this.enviaOrden.value.fec_pla_ini_des <= this.enviaOrden.value.fec_pla_ini_has){
        if(this.enviaOrden.value.fec_rea_ini_des<= this.enviaOrden.value.fec_rea_ini_has){
          this.getPlanIni();
          this.getplanfin();
          this.getReaIni();
          this.getReafin();
          this.subscription.add(this.stkOrde.postBuscarStockOr(formvalue).subscribe((res)=>{
            this.stockOrden=res;
            console.log(this.stockOrden);

          }));
        }else{
          alert("fecha real Inicio Incorrecto")
        }
      }else{
        alert("Fecha Plan Inicio Incorrecto")
      }
  }
  getPlanIni(){
    if(this.enviaOrden.get('fec_pla_ini_des').value==0){
      this.enviaOrden.value.fec_pla_ini_des ='01/01/1999';
    }
  }
  getplanfin(){
    if(this.enviaOrden.get('fec_pla_ini_has').value==0){
      this.enviaOrden.value.fec_pla_ini_has = "01/01/2040"
    }
  }
  getReaIni(){
    if(this.enviaOrden.get('fec_rea_ini_des').value==0){
      this.enviaOrden.value.fec_rea_ini_des ='01/01/1999';
    }
  }
  getReafin(){
    if(this.enviaOrden.get('fec_rea_ini_has').value==0){
      this.enviaOrden.value.fec_rea_ini_has = "01/01/2040"
    }
  }




}
