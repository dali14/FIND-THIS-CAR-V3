import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AppRoutingModule } from './approuting.module';
import { FormGroup, FormsModule,ReactiveFormsModule} from '@angular/forms';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';
import { DefaultModule } from './layouts/default/default.module';
import { HttpClientModule } from "@angular/common/http";
import { AdminlistComponent } from './modules/adminlist/adminlist.component';
import { UserslistComponent } from './modules/userslist/userslist.component';
import { CarslistComponent } from './modules/carslist/carslist.component';
import { AddadminsComponent } from './modules/addadmins/addadmins.component';
import { MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UserdashModule } from './layouts/userdash/userdash.module';
import { CarfindComponent } from './carfind/carfind.component';
import { UserfindComponent } from './userfind/userfind.component';
import { MobileComponent } from './mobile/mobile.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TestComponent,
    AdminlistComponent,
    UserslistComponent,
    CarslistComponent,
    AddadminsComponent,
    HomeComponent,
    ContactUsComponent,
    CarfindComponent,
    UserfindComponent,
    MobileComponent,
    
  
  ],
  imports: [
    MatTabsModule,
    MatCardModule,
    MatToolbarModule,
    ToastrModule.forRoot(),
    MatExpansionModule,
    MatDatepickerModule,
    MatIconModule,
    MatListModule,
    MatStepperModule,
    MatFormFieldModule,
    MatProgressBarModule,
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    ReactiveFormsModule,FormsModule, // reactive form 
    DefaultModule,
    HttpClientModule,
    UserdashModule
    
  ],
  
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
