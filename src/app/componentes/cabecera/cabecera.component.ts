import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor(private authSvc:AuthService, private router:Router) { }
  flag = false;
  flag_men=false;
  rutas = [];
  ngOnInit(): void {
    let rutasLocalStorage = JSON.parse(localStorage.getItem('ruta'))

    this.rutas = rutasLocalStorage
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
