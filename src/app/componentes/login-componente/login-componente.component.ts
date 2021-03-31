
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import {FormBuilder,Validators} from '@angular/forms';
import  {Subscription} from 'rxjs';
import { Login } from 'src/app/modelo/login';
@Component({
  selector: 'app-login',
  templateUrl: './login-componente.component.html',
  styleUrls: ['./login-componente.component.css']
})

export class LoginComponenteComponent implements OnInit ,OnDestroy{
  hide=true;
  user:Login;
  private subscription:Subscription = new Subscription();
  loginForm = this.fb.group({
    username:['',Validators.required],
    password:['',[Validators.required,Validators.minLength(4)]],
  });
  constructor(
    private authSvc:AuthService,
    private fb:FormBuilder,
    private router:Router) { }

  public isError=false;
  ngOnInit(): void {
  }
  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }

  login(){
    const formValue = this.loginForm.value;
    this.subscription.add(this.authSvc.login(formValue).subscribe((res)=>{
      if(res && this.authSvc.saveRol(res)==1){
        this.router.navigate(['/usuaCliente']);
        this.isError=false;
      }else{
        this.router.navigate(['/usuaCliente']);
        this.isError=false;
      }
    },
    error=>{
        this.isError=true;
        setTimeout(()=>{
          this.isError=false;
        },4000);
      }
    ));
  }

  getErrorMessage(field:string):string{
    let message='';
    if(this.loginForm.get(field).errors.required){
      message = 'Campo requerido';
    }
    return message;
  }
  isValidField(field:string):boolean{
    return (this.loginForm.get(field).touched || this.loginForm.get(field).dirty) &&
    !this.loginForm.get(field).valid;
  }
}
