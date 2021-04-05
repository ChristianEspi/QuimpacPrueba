import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Clientes } from 'src/app/modelo/clientes';
import { ClientesService } from 'src/app/servicios/clientes.service';
@Component({
  selector: 'app-tabla-cliente',
  templateUrl: './tabla-cliente.component.html',
  styles: [
  ]
})
export class TablaClienteComponent implements OnInit ,OnDestroy{
  dtOptions: DataTables.Settings = {};
  cliente:Clientes[];
  dtTrigger = new Subject();
  constructor(private cliScv:ClientesService) { }

  ngOnInit(): void {
    this.dtOptions = {
     pagingType: 'full_numbers',
     pageLength: 25,
     scrollX:false
   };
   //this.http.get("http://25.8.205.35/api/Admin/selectClientes")
   //.subscribe((res:any) => {
  //     this.cliente=res;
  //     this.dtTrigger.next();
  //   });

  let a ;
  a=JSON.parse(localStorage.getItem('usuario'));
  a[0].usu_cod_sap;
  if(a[0].usu_cod_sap == "0"){
    this.cliScv.getClientes().subscribe((res:any)=>{
      this.cliente=res;
      this.dtTrigger.next();
    });
  }else{
    //let cliente=Clientes;
      this.cliScv.getCliente(a[0].usu_cod_sap).subscribe((client)=>{
      var listcliente=[];
      listcliente.push(client)
      this.cliente=listcliente;
      this.dtTrigger.next();
    })
  }
  }
  ngOnDestroy(): void {
  // Do not forget to unsubscribe the event
  this.dtTrigger.unsubscribe();
  }

}
