import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Vehiculo } from 'src/app/modelo/vehiculo';
import { VehiculoService } from 'src/app/servicios/vehiculo.service';

@Component({
  selector: 'app-tabla-vehiculo',
  templateUrl: './tabla-vehiculo.component.html',
  styleUrls: ['./tabla-vehiculo.component.css']
})
export class TablaVehiculoComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  listvehi:Vehiculo[];
  dtTrigger = new Subject();
  constructor(private vehiSvc:VehiculoService) { }

  ngOnInit(): void {
    this.dtOptions = {
     pagingType: 'full_numbers',
     pageLength: 25,
     scrollX:false
   };
   this.vehiSvc.listarVehi().subscribe((vehi)=>{
     this.listvehi=vehi
   })
  }
  abrir=false;
  abrirPopEditar(){
    this.abrir=true;
  }
}
