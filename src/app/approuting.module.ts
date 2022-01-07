import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule} from '@angular/forms';


import { NotFoundComponent } from './not-found/not-found.component';
import { TestComponent } from './test/test.component';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

import { AdminlistComponent } from './modules/adminlist/adminlist.component';
import { UserslistComponent } from './modules/userslist/userslist.component';
import { CarslistComponent } from './modules/carslist/carslist.component';
import { AddadminsComponent } from './modules/addadmins/addadmins.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UserdashComponent } from './layouts/userdash/userdash.component';
import { ProfilComponent } from './modules/profil/profil.component';
import { AccountComponent } from './modules/account/account.component';

import { NewcarsComponent } from './modules/newcars/newcars.component';
import { MycarsComponent } from './modules/mycars/mycars.component';
import { CarfindComponent } from './carfind/carfind.component';
import { UserfindComponent } from './userfind/userfind.component';
import { MobileComponent } from './mobile/mobile.component';





const routes: Routes = [
  {path : '' ,component:HomeComponent},
  {path : 'mobile', component:MobileComponent},
  {path:'find/:id',component:CarfindComponent},
  {path:'user/:id',component:UserfindComponent},


  
  {path : 'contact-us',component:ContactUsComponent},

  {path :'admins',component:DefaultComponent,children:[
          {path:'',component: DashboardComponent},
          {path:'carslist',component:CarslistComponent},
          {path:'adminliste',component:AdminlistComponent},
          {path:'userliste',component:UserslistComponent},
          {path:'add',component:AddadminsComponent}]},



  {path :'profile',component:UserdashComponent,children:[
      {path:'user/:id',component:ProfilComponent},
      {path:'account/:id',component:AccountComponent},
      {path :'mycars',component:MycarsComponent},
      {path :'newcar/:id',component:NewcarsComponent}
    
    
  ]},





  
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  {path:'test',component:TestComponent},
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  {path : '**', component: NotFoundComponent}
  
  
];


@NgModule({
 imports: [RouterModule.forRoot(routes),
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  declarations: [
   
  ]
})
export class AppRoutingModule {

 }

