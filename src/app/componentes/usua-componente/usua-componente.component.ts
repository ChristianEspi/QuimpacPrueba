import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import {Router,ActivatedRoute}from '@angular/router';
import {ClientesService} from 'src/app/servicios/clientes.service';
import { Clientes } from 'src/app/modelo/clientes';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Usuarios } from 'src/app/modelo/usuarios';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Subject } from 'rxjs';
import { RolService } from 'src/app/servicios/rol.service';
import { Rol } from 'src/app/modelo/rol';
import { RolPermisosService } from 'src/app/servicios/rol-permisos.service';
import { PermisosService } from 'src/app/servicios/permisos.service';
import { RolPermisos } from 'src/app/modelo/rol-permisos';

@Component({
  selector: 'app-usua',
  templateUrl: './usua-componente.component.html',
  styleUrls: ['./usua-componente.component.css']
})
export class UsuaComponenteComponent implements OnInit {
  id:string;
  permisos=[];
  flag = false;
  flag2=false;
  flag3=false;
  flag4=false;
  flagPerM=false;
  flagPerG=false;
  flagMdPer=false;
  flagPer=false;
  disa:string;
  //formUsuario: FormGroup;

  prueba : RolPermisos[];
  selec=[];
  formCheck: FormGroup;
  public isErrorRol=false;
  constructor(public authSvc:AuthService,private actRoter:ActivatedRoute,
    private clieServ:ClientesService,
    private usuScv:UsuariosService,
    private formBuilder: FormBuilder,
    private router:Router,
    private datepipe:DatePipe,
    private rolSrv:RolService,
    private rolPerSrv:RolPermisosService,
    private perSvc:PermisosService) { }

    //public usuario:Usuarios = new Usuarios();
    usuario = new Usuarios();
    //usu=new Usuarios();
    usua:Usuarios[];
    //Tabla Usuario
    data:any;
    //usu:Usuarios[];
    dtOptions: DataTables.Settings = {};

    dtTrigger = new Subject();


    cliente:Clientes = new Clientes();
    clie:Clientes = new Clientes();
    client:Clientes = new Clientes();
    //saber que codigo

      formRolPer=this.formBuilder.group({
        rol_per_cod :[''],
        rol_per_cod_rol :[''],
        rol_per_cod_per :[''],
        rol_per_est :[''],
        rol_per_fec_cre :[''],
        rol_per_usu_cre_sap :[''],
        rol_per_fec_mod :[''],
        rol_per_usu_mod_sap:[''],
      });

      formPer=this.formBuilder.group({
        id:[''],
        descripcion:['']
      });


      formRol=this.formBuilder.group({
        rol_cod:[''],
        rol_nom:['',Validators.required],
      });


      formUsuario =this.formBuilder.group({
      usu_cod_usu:['',],
      usu_nom_ape:['',Validators.required],
      usu_cod_sap:[''],
      usu_cod_cli:[''],
      usu_cor:['',Validators.required],
      usu_usu:['',Validators.required],
      usu_cla:['',Validators.required],
      usu_est:['',Validators.required],
      usu_cod_rol:['',Validators.required],

      usu_fec_cre:[''],
      usu_usu_cre_sap:[''],
      usu_fec_mod:[''],
      usu_usu_mod_sap:[''],
    });
    //rol
    rol:any
    nuevorol = new Rol();
    rolcodsap:any
    //RolPermisos
    rolPer:any
    //Permisos
    per:any
    permi = new RolPermisos();
  ngOnInit(): void {
    this.cargaDatosClie();
    this.listarClieCod();
    this.listarRol();

    this.permisos=[{
      id:1,
      descripcion:'cliente',
      check:false
    },
    {
      id:2,
      descripcion:'stock',
      check:false
    },
    {
      id:3,
      descripcion:'movimientos',
      check:false
    },
    {
      id:4,
      descripcion:'ordenes',
      check:false
    }]
    this.formCheck = this.formBuilder.group({
      id: this.formBuilder.array([])
    });
  }
  /*Validar formularios*/
  get usu_nom_ape(){
    return this.formUsuario.get('usu_nom_ape')
  }
  get usu_cor(){
    return this.formUsuario.get('usu_cor')
  }
  get usu_usu(){
    return this.formUsuario.get('usu_usu')
  }

  get usu_cla(){
    return this.formUsuario.get('usu_cla')
  }

  get usu_cod_rol(){
    return this.formUsuario.get('usu_cod_rol')
  }

  /*desabilitar */
  public cargaDatosClie():void{
      this.actRoter.params.subscribe(params =>
        {this.id = params['id']})
  }

  listarClieCod():void{
    this.clieServ.getCliente(this.id).subscribe((cliente)=>{this.cliente=cliente;
      this.obtenerUsuario(this.cliente.cli_cod_sap);

    });
  }
  obtenerUsuario(id:string):void{
  this.usuScv.getUsuarioCod(id).subscribe((usu)=>{
      this.usuario=usu;
  });
  }
/*-------------------------------------------------------------------------------*/
abrirPop(){
  this.flag2= true;
  this.flag = true;
  this.clieServ.getCliente(this.id).subscribe((cliente)=>{
    let a;
    a = JSON.parse(localStorage.getItem('usuario'));
    if(a[0].usu_cod_sap == "0"){
      this.rol = [];
      var disa = new Rol;
      disa.rol_cod = 0;
      disa.rol_nom = "ADMINISTRADOR";
      disa.rol_est = null;
      disa.rol_cod_usu_sap = null;
      disa.rol_fec_cre = null;
      disa.rol_usu_cre_sap = null;
      disa.rol_fec_mod  = null;
      disa.rol_usu_mod_sap = null;
      this.rol.push(disa)
    }
  });
}
abrirPopEd(id:string){

  this.flag2= true;
  this.flag = false;
  this.usuScv.getUsuarioCod(id).subscribe((usuar)=>{this.formUsuario.patchValue(usuar)
  })


}

cerrarPop(){
  this.flag2= false;
  this.formUsuario.reset();
  this.flagMdPer=false;
  this.flagPerM=false;
  this.flagPerG=false;
  this.formUsuario.reset();
}
cerrarPopRol(){
  this.flag4= false;
  this.formUsuario.reset();
  this.flagMdPer=false;
  this.flagPer=false;
  this.flagPerM=false;
  this.flagPerG=false;
  this.formRol.reset();
}
guardarUsua(){
  if(this.formUsuario.valid){
    const formvalue = this.formUsuario.value;
    this.formUsuario.value.usu_cod_usu=0;
    this.formUsuario.value.usu_usu_cre_sap=this.cliente.cli_cod_sap;
    this.formUsuario.value.usu_fec_cre = new Date();
    this.datepipe.transform(this.formUsuario.value.usu_fec_cre,'dd/MM/yyyy')
    this.formUsuario.value.usu_fec_mod ="1900-01-01T00:00:00";
    this.formUsuario.value.usu_cod_cli =this.cliente.cli_cod_cli;
    this.formUsuario.value.usu_cod_sap =this.cliente.cli_cod_sap;
    this.formUsuario.value.usu_est="1"
    this.usuScv.createUsuario(formvalue).subscribe((res)=>{
    this.usuario=res;
    this.flag2= false;
    this.cargaDatosClie();
    this.listarClieCod();
    this.formUsuario.reset();
  })
}else{
    console.log('Not Valid');
}
}

actualizarUsuario(){

  const formvalue = this.formUsuario.value;
  this.formUsuario.value.usu_usu_mod_sap=this.cliente.cli_cod_sap;
  this.formUsuario.value.usu_fec_mod = new Date();
  this.datepipe.transform(this.formUsuario.value.usu_fec_mod,'dd/MM/yyyy')
  this.formUsuario.value.usu_cod_cli=this.cliente.cli_cod_cli;

  this.usuScv.update(formvalue).subscribe((res)=>{
  this.usuario=res;
  this.flag2= false;
  this.cargaDatosClie();
  this.listarClieCod();
  this.formUsuario.reset();
  })
}

crearRol(){
  this.flag3=true;
}
flagRolM=false;

nuevoRol(){
  this.flag4= true;
  this.flagRolM=true;
}

edirol(id:number){
  this.rolSrv.getRolId(id).subscribe((res)=>{
    this.formRol.patchValue(res);
      this.rolPerSrv.getRolpermisoId(res.rol_cod).subscribe((dataRole)=>{
        for(var i=0;i<this.permisos.length ;i++){
          for(var j=0;j<dataRole['length'];j++){
          if(this.permisos[i].id==dataRole[j].rol_per_cod_per){
            this.permisos[i].check = true;
          }
        }
        }
      });
  });
  this.flagPerM=true;
  this.flagPerG=false;
  this.flagPer=true;
}
actualizaRol(){

  const formValue = this.formRol.value;
  this.formRol.value.rol_fec_cre = new Date();
  this.formRol.value.rol_est="1"
  this.datepipe.transform(this.formRol.value.rol_fec_cre,'dd/MM/yyyy')
  this.formRol.value.rol_usu_cre_sap = this.cliente.cli_cod_sap;
  this.formRol.value.rol_fec_mod ="1900-01-01T00:00:00";
  this.rolSrv.update(formValue).subscribe((data)=>{this.nuevorol=data;
  this.listarRol();
  });
  formValue.reset();
  console.log('actualizado');
}

guardarRol(){
  const formValue = this.formRol.value;
  this.formRol.value.rol_cod=0;
  this.formRol.value.rol_fec_cre = new Date();
  this.datepipe.transform(this.formRol.value.rol_fec_cre,'dd/MM/yyyy')
  this.formRol.value.rol_cod_usu_sap=this.cliente.cli_cod_sap;
  this.formRol.value.rol_est="1";
  this.formRol.value.rol_usu_cre_sap = this.cliente.cli_cod_sap;
  this.formRol.value.rol_fec_mod ="1900-01-01T00:00:00";
  this.rolSrv.createRol(formValue).subscribe((data)=>{this.nuevorol=data;
  this.listarRol();
  this.flagPer=true;
  },
  error=>{
      this.isErrorRol=true;
      setTimeout(()=>{
        this.isErrorRol=false;
      },4000);
    });
    this.formRol.reset();
}

crearRolPermiso(){
  //const formrolper= this.formRolPer.value;
  this.prueba = [];
  //this.formRolPer.value.rol_per_cod_per = this.formCheck.value.id[0];
  for(var i=0;i<this.formCheck.value.id.length;i++){
    let formlper = new RolPermisos;
    formlper.rol_per_cod=0
    formlper.rol_per_cod_per = this.formCheck.value.id[i];
    formlper.rol_per_est="1";
    formlper.rol_per_fec_cre = "30/03/2021"
    formlper.rol_per_fec_mod ="1900-01-01T00:00:00"
    formlper.rol_per_usu_cre_sap=this.cliente.cli_cod_sap;
    formlper.rol_per_cod_rol= this.nuevorol.rol_cod;
    this.prueba.push(formlper);
  }
  this.rolPerSrv.createRolPermisos(this.prueba).subscribe((permiso)=>{
    this.permi=permiso;
  });
  this.flagPer=false;
}

actualizarRolPermiso(){

    this.rolPerSrv.getRolpermisoId(this.formRol.value.rol_cod).subscribe((dataRole)=>{
    let ye = dataRole;
    for(var i=0;i<this.permisos.length ;i++){
      for(var j=0;j<ye['length'];j++){
        if(this.permisos[i].id==ye[j].rol_per_cod_per){
          if(this.permisos[i].check == true){
            ye[j].rol_per_est = "1";
          }else{
            ye[j].rol_per_est = "0";
          }
        }
      }
    }
    this.rolPerSrv.update(ye).subscribe((permiso)=>{
      this.permi=permiso;
    });
    //console.log(id);
  });


  //  this.prueba = [];
  //this.formRolPer.value.rol_per_cod_per = this.formCheck.value.id[0];
  //for(var i=0;i<this.permisos.length;i++){
  //  let formlper = new RolPermisos;
  //  formlper.rol_per_cod_per = this.formCheck.value.id[i];
  //  if(true){
  //    formlper.rol_per_est="0";
  //  }else{
  //    formlper.rol_per_est="1";
  //  }
  //  formlper.rol_per_fec_cre = "30/03/2021"
  //  formlper.rol_per_fec_mod ="30/03/2021"
  //  formlper.rol_per_usu_cre_sap=this.cliente.cli_cod_sap;
  //  formlper.rol_per_cod_rol= this.nuevorol.rol_cod;
  //  this.prueba.push(formlper);
  //}
  this.flagPer=false;
}

listarRol(){
  this.rolSrv.getRoles().subscribe((rol)=>{this.rol=rol
    //console.log(this.rol)
  })
}
listarRolCodSap(codsap:string){
  this.rolSrv.getRolCod(codsap).subscribe((rolcod)=>{this.rolcodsap=rolcod
    console.log(this.rolcodsap);
  })
}
onCheck(isChecked: boolean, val){

    //const che = (this.formCheck.controls.id as FormArray);
    if (isChecked) {
      //che.push(new FormControl(val));
      for(var i=0;i<this.permisos.length;i++){
        if(this.permisos[i].id==val){
          this.permisos[i].check = true;
          i=this.permisos.length;
        }
      }

    } else {
      //const index = che.controls.findIndex(x => x.value === val);
      //che.removeAt(index);
      for(var i=0;this.permisos.length;i++){
        if(this.permisos[i].id==val){
          this.permisos[i].check = false;
          i=this.permisos.length;
        }
      }
    }
    //console.log(this.formCheck.value);
}

error(field:string):string{
  let message='';
  if(this.formRol.get(field).errors.required){
    message='Campo requerido'
  }
  return message;
}
isValidrol(field:string):Boolean{
  return (this.formRol.get(field).touched || this.formRol.dirty)&&
  !this.formRol.get(field).valid;
}


}
