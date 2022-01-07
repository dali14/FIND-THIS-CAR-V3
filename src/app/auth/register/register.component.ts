import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  bgregister:string ='../assets/userlog/img/bgsigin.png';
  public registerForm: FormGroup;
  constructor(  public formBuilder: FormBuilder,
                public authService: AuthService,
                public router: Router) 
        {this.registerForm = this.formBuilder.group({
          pseudo:[''],
          Name:[''],
          ville:[''],
          email:[''],
          tel:[''],
          password:[''],
          
        });}

  ngOnInit(): void {
  }
  signupUser(){
    this.authService.signup(this.registerForm.value).subscribe(res => {
      if(res.status == 201) {
        this.registerForm.reset();
        this.router.navigate(['/auth']);
      }
    });
}

  }


