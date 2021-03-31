import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {StockClienteService } from 'src/app/servicios/stock-cliente.service';
import  {Subject, Subscription} from 'rxjs';
import { StockCliente,StockTbclie } from 'src/app/modelo/stock-cliente.module';
@Component({
  selector: 'app-stock-cliente',
  templateUrl: './stock-cliente.component.html',
  styleUrls: ['./stock-cliente.component.css']
})
export class StockClienteComponent implements OnInit {

  private subscription:Subscription= new Subscription();
  stockClie=new StockTbclie();

  enviaForm = this.fb.group({
    des_alm:[''],
    des_mat:[''],
    num_lot:[''],
    ser_pre:[''],
    cli_buq:[''],
    fec_mov_des:[''],
    fec_mov_has:[''],
    fec_lle_des:[''],
    fec_lle_has:[''],
    fec_sal_des:[''],
    fec_sal_has:[''],
  });
  constructor(private fb:FormBuilder ,private stkClie:StockClienteService) { }
  dtOptions: DataTables.Settings = {};
  //dtTrigger = new Subject();
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      scrollX:false
    };
    this.getfec_mov_des();
  }
  buscarSotckClie(){
    if(this.enviaForm.value.fec_mov_des <= this.enviaForm.value.fec_mov_has){

      if(this.enviaForm.value.fec_lle_des <= this.enviaForm.value.fec_lle_has){

        if(this.enviaForm.value.fec_sal_des <= this.enviaForm.value.fec_sal_has){
          this.getfec_mov_des();
          this.getfec_mov_has();
          this.getfec_lle_des();
          this.getfec_lle_has();
          this.getfec_sal_des();
          this.getfec_sal_has();
          const formValue = this.enviaForm.value;
          this.subscription.add(this.stkClie.postClie(formValue).subscribe((res)=>{
            this.stockClie=res;
            console.log(this.stockClie);
          }));
        }else{
            alert('Error Fecha Salida');
        }
      }else{
        alert('Error Fecha llegada');
      }
    }else{
      alert('Error fecha Movimiento');
    }

  }
  getfec_mov_des(){
    if(this.enviaForm.get('fec_mov_des').value == 0){
      this.enviaForm.value.fec_mov_des ='01/01/1999'
    }

  }
  getfec_mov_has(){
    if(this.enviaForm.get('fec_mov_has').value == 0){
      this.enviaForm.value.fec_mov_has = "01/01/2040"
    }
  }
  getfec_lle_des(){
    if(this.enviaForm.get('fec_lle_des').value==0){
      this.enviaForm.value.fec_lle_des ='01/01/1999';
    }
  }
  getfec_lle_has(){
    if(this.enviaForm.get('fec_lle_has').value==0){
      this.enviaForm.value.fec_lle_has = "01/01/2040"
    }
  }
  getfec_sal_des(){
    if(this.enviaForm.get('fec_sal_des').value==0){
      this.enviaForm.value.fec_sal_des ='01/01/1999';
    }
  }
  getfec_sal_has(){
    if(this.enviaForm.get('fec_sal_has').value==0){
      this.enviaForm.value.fec_sal_has = "01/01/2040"
    }
  }




}
