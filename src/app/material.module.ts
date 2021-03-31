import { NgModule } from '@angular/core';
import{MatToolbarModule} from '@angular/material/toolbar';
//import {MatInputModule}from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from '@angular/material/icon';
const myModules=[MatToolbarModule,MatFormFieldModule,ReactiveFormsModule,MatIconModule];


@NgModule({
  imports: [...myModules],
  exports: [...myModules],
})
export class MaterialModule{}
