import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgModule } from '@angular/core';
import { SessionLoginService } from 'src/app/services/session-login/session-login.service';






@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  public loginForm: FormGroup;

  username ='';
  password ='';
  wrongCredentials = false ;

  constructor(
    private sessionLogint :SessionLoginService,
    private router :Router,
    public formBuilder: FormBuilder) { 
      this.loginForm= this.formBuilder.group({
        email: [''],
        password: [''],
      });
    }

  ngOnInit(){}

  loginUser() {
    
      this.router.navigate(['/admins']);


  }
}