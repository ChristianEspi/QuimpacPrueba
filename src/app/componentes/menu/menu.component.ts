import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirComponent } from 'src/app/componentes/dialog-confir/dialog-confir.component';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  rutas = []
  constructor(private authSvc:AuthService,private router:Router,public dialogo: MatDialog) { 


  }

  ngOnInit(): void {
    let rutasLocalStorage = JSON.parse(localStorage.getItem('ruta'));

    this.rutas = rutasLocalStorage;
 
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
