import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/internal/operators/take';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { RolUserService } from '../servicios/rol-user.service';


@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate {
  constructor(private authSvc:AuthService,
              private router:Router,
              private _userPermiss: RolUserService){}
  canActivate(): Observable<boolean> {
    return this.authSvc.isLogged.pipe(
      take(1),
      map((isLogged:boolean)=> !isLogged),
    );
  }

}
