import { Component, OnInit,OnDestroy, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { Usuarios } from 'src/app/modelo/usuarios';
import {UsuaComponenteComponent} from 'src/app/componentes/usua-componente/usua-componente.component'
@Component({
  selector: 'app-tabla-usuario',
  templateUrl: './tabla-usuario.component.html',
  styles: [
  ]
})
export class TablaUsuarioComponent implements OnInit,OnDestroy{
  @Input() data = new Array<Usuarios>();
  dtOptions: DataTables.Settings = {};

  dtTrigger = new Subject();

  constructor( private usuCom:UsuaComponenteComponent) { }

  ngOnInit(): void {
    this.dtOptions = {
     pagingType: 'full_numbers',
     pageLength: 5,
     scrollX:false,
   };
    this.dtTrigger.next();
  }
  abrirPopEd(id:string){
    this.usuCom.abrirPopEd(id);
  }


  ngOnDestroy(): void {
  // Do not forget to unsubscribe the event
  this.dtTrigger.unsubscribe();
  }



}
