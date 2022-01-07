import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from "src/app/services/auth.service";
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from "src/app/services/local-storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  bglogin:string ='../assets/userlog/img/bglogin.png';
  public loginForm: FormGroup;

 
  invalidLogin = false ;
  constructor( 
    private localStorageService: LocalStorageService,
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router,
    private toastr: ToastrService) { 

      this.loginForm= this.formBuilder.group({
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.minLength(6), Validators.required]],
      });
    }

    iduser:string;

  ngOnInit(): void {
    this.iduser = localStorage.getItem('userid');
      
      this.iduser = this.iduser.slice(1,-1);
      
      if(this.iduser == "" ){
        this.router.navigate(['auth/login'])
        
      }else{
        
        this.router.navigate(['profile/user/'+ this.iduser])
     
    }


  }
  loginUser() {
    this.authService.login(this.loginForm.value)
    if(this.localStorageService.get('session') == false){
      this.toastr.error("error login", 'login Or pass ');
    }
      
    /*
    if(this.localStorageService.get('access_token') != ""){
      this.toastr.success("error login", 'login Or pass ');
      
    }else{
      
      
      this.toastr.error("error login", 'login Or pass ');
    }*/
    

  }

}
