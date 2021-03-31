import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolUserService {

  private _userPermiss: BehaviorSubject<any>

  constructor() { 
    this._userPermiss = new BehaviorSubject('')
    

  }
}
