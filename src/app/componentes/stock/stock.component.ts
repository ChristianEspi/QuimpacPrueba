import { Component, Input, OnInit } from '@angular/core';
import{StockService} from 'src/app/servicios/stock.service'
//import{TablaStockComponent }from 'src/app/componentes/tabla-stock/tabla-stock.component'
import { Stock } from 'src/app/modelo/stock.module';
import { Subject, Subscription } from 'rxjs';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  //tbStock:TablaStockComponent;
  private subscription:Subscription= new Subscription();
  constructor(private sto:StockService,private fb:FormBuilder) { }
  stockB = new Stock();
  enviaStock = this.fb.group({
  tan:[''],
  des_mat:[''],
  lot:[''],
  })
  ngOnInit(): void {
    //this.tbStock.cargaStock();
    //this.stock();
  }
  stock(){
    const formvalue = this.enviaStock.value;
    this.subscription.add(this.sto.getStock(formvalue).subscribe((res)=>{
      this.stockB=res;
    }));

    //this.tbStock.cargaStock();
  }
  ngOnDestroy(): void {
  // Do not forget to unsubscribe the event
  //this.dtTrigger.unsubscribe();
  }

}
