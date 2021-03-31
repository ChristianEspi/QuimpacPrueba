import { Component, NgModule, OnInit } from '@angular/core';


@Component({
  selector: 'app-clie',
  templateUrl: './clie-componente.component.html',
  styleUrls: ['./clie-componente.component.css']
})
export class ClieComponenteComponent implements OnInit {
flag = false;
flage=true;
  constructor() { }

  ngOnInit(): void {
  }

  abriPopUp(){
    this.flage=!this.flage;
  }
  cerrarPop(){
    this.flag=!this.flag;
  }
}
