import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { CommonModule } from "@angular/common";


/*import { NavComponent } from './nav/nav.component';*/
import { AddadminComponent } from './addadmin/addadmin.component';
import { DialogComponent } from './forgetpass/dialog/dialog.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  { path:'', component:LoginComponent},
  
  { path:'resetpass', component:ForgetpassComponent},
  
  {path:'addadmin',component:AddadminComponent},
  {path:'resetpassword',component:DialogComponent},
  
  

  /*{path:'login-admin',component:LoginComponent}*/
  
  
  ];
  @NgModule({
    imports: [RouterModule.forChild(routes),CommonModule],
    exports: [RouterModule],
    declarations: [
     ForgetpassComponent
     
  ]
  })
  export class AdminRoutingModule { }