import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Vehiculo } from 'src/app/modelo/vehiculo';
import { VehiculoService } from 'src/app/servicios/vehiculo.service';
@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})

export class VehiculoComponent implements OnInit {
  abrir=false;
  btnM=false;
  vehi = new Vehiculo();
  constructor(private fb:FormBuilder,
              private vehiSvc:VehiculoService,
              private datepipe:DatePipe) { }
  formVehi=this.fb.group({
    veh_cod:['',Validators.required],
    veh_gru_cue:['',Validators.required],
    veh_pla_veh:['',Validators.required],
    veh_nom:['',Validators.required],
    veh_con_bus:['',Validators.required],
    veh_pai:['',Validators.required],
    veh_idi:['',Validators.required],
    veh_est_reg:['',Validators.required],
    veh_est:['',Validators.required],

    veh_fec_cre:[''],
    veh_usu_cre_sap:[''],
    veh_fec_mod:[''],
    veh_usu_mod_sap:[''],
  });
  ngOnInit(): void {
  }
  cerrarPop(){
      this.abrir=false;
  }
  abrirPop(){
    this.abrir=true;
    this.btnM=true;
  }

  get cho_gru_cue(){
    return this.formVehi.get('veh_gru_cue')
  }
  get veh_pla_veh(){
    return this.formVehi.get('veh_pla_veh')
  }
  get veh_nom(){
    return this.formVehi.get('veh_nom')
  }
  get veh_con_bus(){
    return this.formVehi.get('veh_con_bus')
  }
  get veh_pai(){
    return this.formVehi.get('veh_pai')
  }
  get veh_idi(){
    return this.formVehi.get('veh_idi')
  }

  get veh_est_reg(){
    return this.formVehi.get('veh_est_reg')
  }
  get veh_est(){
    return this.formVehi.get('veh_est')
  }

  actualizarvehi(){
    const formvalue = this.formVehi.value;
    this.vehiSvc.actualizarVehi(formvalue).subscribe((vehi)=>{
      this.vehi=vehi;
    })
  }

  crearvehi(){
    const formvalue = this.formVehi.value;
    this.formVehi.value.veh_fec_cre = new Date();
    this.formVehi.value.veh_cod=0;
    this.datepipe.transform(this.formVehi.value.veh_fec_cre,'dd/MM/yyyy')
    this.formVehi.value.veh_fec_mod =new Date("1900-01-01");
    this.datepipe.transform(this.formVehi.value.veh_fec_mod,'dd/MM/yyyy')
    this.vehiSvc.crearvehi(formvalue).subscribe((vehi)=>{
      this.vehi=vehi;
    })
  }
}
