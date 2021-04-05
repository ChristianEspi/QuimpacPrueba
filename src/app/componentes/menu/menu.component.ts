import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirComponent } from 'src/app/componentes/dialog-confir/dialog-confir.component';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { RolPermisosService } from 'src/app/servicios/rol-permisos.service';
import { RolPermisos } from 'src/app/modelo/rol-permisos';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  rolPermi=new RolPermisos();
  estCli:number;
  estStk:number;
  estMov:number;
  estOrd:number;
  rutas = []
  constructor(private authSvc:AuthService,
              private router:Router,
              public dialogo: MatDialog,
              public rolPerSvc:RolPermisosService) {
  }

  ngOnInit(): void {
    let rutasLocalStorage = JSON.parse(localStorage.getItem('ruta'));
    this.rutas = rutasLocalStorage;
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

  mostrarDialogo(): void {
    this.dialogo
    .open(DialogConfirComponent, {
      data: `¿Seguro que quieres cerrar sesión?`
    })
    .afterClosed()
    .subscribe((confirmado: Boolean) => {
      if (confirmado) {
        this.onLogut();
      }
    });
  }

  onLogut():void{
    this.authSvc.cerrarSession();
    this.router.navigate(['/login']);
  }

}
