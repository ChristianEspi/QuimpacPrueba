import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Chofer } from 'src/app/modelo/chofer';
import { ChoferService } from 'src/app/servicios/chofer.service';

@Component({
  selector: 'app-tabla-chofer',
  templateUrl: './tabla-chofer.component.html',
  styleUrls: ['./tabla-chofer.component.css']
})
export class TablaChoferComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  listchofer:Chofer[];
  dtTrigger = new Subject();
  constructor(private choSvc:ChoferService) { }
  abrir=false;
  ngOnInit(): void {
    this.dtOptions = {
     pagingType: 'full_numbers',
     pageLength: 25,
     scrollX:false
   };
   this.choSvc.listarChofer().subscribe((chofer)=>{
   this.listchofer = chofer});
   console.log(this.listchofer)
   }
   listar(){

   }
   abrirPopEditar(id:number){
     this.abrir=true;
   }
}
