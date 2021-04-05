import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Chofer } from 'src/app/modelo/chofer';
import { ChoferService } from 'src/app/servicios/chofer.service';
import { TablaChoferComponent } from '../tabla-chofer/tabla-chofer.component';

@Component({
  selector: 'app-chofer',
  templateUrl: './chofer.component.html',
  styleUrls: ['./chofer.component.css']
})
export class ChoferComponent implements OnInit {

  abrir=false;
  btnM=false;
  btnG=false;
  constructor(private choSvc:ChoferService,
              private tbChofer:TablaChoferComponent,
              private fb:FormBuilder,
              private datepipe:DatePipe) { }
  creaChofer = new Chofer();

  formChofer=this.fb.group({
    cho_cod:[''],
    cho_gru_cue:['',Validators.required],
    cho_cod_sap_cho:['',Validators.required],
    cho_nom:['',Validators.required],
    cho_con_bus:['',Validators.required],
    cho_pai:['',Validators.required],
    cho_idi:['',Validators.required],

    cho_num_ide_fis:['',Validators.required],
    cho_num_tip_nif:['',Validators.required],

    cho_num_per_fis:['',Validators.required],
    cho_cia_imp:['',Validators.required],
    cho_est_reg:['',Validators.required],
    cho_est:['',Validators.required],

    cho_fec_cre:[''],
    cho_usu_cre_sap:[''],
    cho_fec_mod:[''],
    cho_usu_mod_sap:[''],
  })
  ngOnInit(): void {
  }

  crearChofer():void{
    const formValue=this.formChofer.value;
    this.formChofer.value.cho_cod=0;
    //this.formUsuario.value.usu_usu_cre_sap=this.cliente.cli_cod_sap;
    this.formChofer.value.cho_fec_cre = new Date();
    this.datepipe.transform(this.formChofer.value.cho_fec_cre,'dd/MM/yyyy')
    this.formChofer.value.cho_fec_mod =new Date("1900-01-01");
    this.datepipe.transform(this.formChofer.value.cho_fec_mod,'dd/MM/yyyy')
    this.choSvc.crearChofer(formValue).subscribe((chofer)=>{
      this.creaChofer=chofer;
      this.tbChofer.listar();
    })
  }
  actualizarchofer(){
    const formValue=this.formChofer.value;
    this.choSvc.actualizarChofer(formValue).subscribe((chofer)=>{
      this.creaChofer=chofer;
      this.tbChofer.listar();
    })
  }

  cerrarPop(){
      this.abrir=false;
  }
  abrirPop(){
    this.abrir=true;
    this.btnM=true;
  }
  // validacion
    get cho_gru_cue(){
      return this.formChofer.get('cho_gru_cue')
    }
    get cho_cod_sap_cho(){
      return this.formChofer.get('cho_cod_sap_cho')
    }
    get cho_nom(){
      return this.formChofer.get('cho_nom')
    }
    get cho_con_bus(){
      return this.formChofer.get('cho_con_bus')
    }
    get cho_pai(){
      return this.formChofer.get('cho_pai')
    }
    get cho_idi(){
      return this.formChofer.get('cho_idi')
    }

    get cho_num_ide_fis(){
      return this.formChofer.get('cho_num_ide_fis')
    }
    get cho_num_tip_nif(){
      return this.formChofer.get('cho_num_tip_nif')
    }

    get cho_num_per_fis(){
      return this.formChofer.get('cho_num_per_fis')
    }
    get cho_cia_imp(){
      return this.formChofer.get('cho_cia_imp')
    }
    get cho_est_reg(){
      return this.formChofer.get('cho_est_reg')
    }
    get cho_est(){
      return this.formChofer.get('cho_est')
    }
}
