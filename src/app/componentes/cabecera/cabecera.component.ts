import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { RolPermisos } from 'src/app/modelo/rol-permisos';
import { RolPermisosService } from 'src/app/servicios/rol-permisos.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor(private authSvc:AuthService,
              private router:Router,
              public rolPerSvc:RolPermisosService) { }
  flag = false;
  flag_men=false;
  rutas = [];
  diaActual = new Date();
  estCli:number;
  estStk:number;
  estMov:number;
  estOrd:number;
  rolPermi=new RolPermisos();
  ngOnInit(): void {
    let rutasLocalStorage = JSON.parse(localStorage.getItem('ruta'))
    this.rutas = rutasLocalStorage

    let idLogeado;
    idLogeado=JSON.parse(localStorage.getItem('usuario'));

    this.rolPerSvc.getRolpermisoId(idLogeado[0].usu_cod_rol).subscribe((permis)=>{
      this.rolPermi=permis;

      this.estCli=this.rolPermi[0].rol_per_est;
      this.estStk=this.rolPermi[1].rol_per_est;
      this.estMov=this.rolPermi[2].rol_per_est;
      this.estOrd=this.rolPermi[3].rol_per_est;

    })
  }

  abrir(){
      this.flag= !this.flag;
      this.flag_men=!this.flag_men;
  }
  onLogut():void{
    this.authSvc.cerrarSession();
    this.router.navigate(['/login']);
  }

}
