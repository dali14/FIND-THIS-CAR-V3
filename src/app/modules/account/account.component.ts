import { Component, OnInit } from '@angular/core';
import { UserslistService } from "src/app/services/userslist.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  public dataSource: any = [];
  public registerForm: FormGroup;

  constructor(
    public userservice :UserslistService ,
    private route :ActivatedRoute,
    public formBuilder: FormBuilder,
    public router :Router)
  
     {this.registerForm = this.formBuilder.group({
      
      Name:[''],
      ville:[''],
      email:[''],
      password:[''],
      tel:['']
    }); }
    iduser:string;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      const id = params.get('id');

      this.iduser = localStorage.getItem('userid');  
      this.iduser = this.iduser.slice(1,-1);
  
      
      if(this.iduser == "" ){

        this.router.navigate(['auth/login'])
        
      }else{
        
        this.userservice.get(id).subscribe(
          res => this.dataSource =res
        );
     
    }
      
     
      
      

    })
  }
  
  updateUser(){

    this.route.paramMap.subscribe(params =>{
      
      
      const id = params.get('id'); 
      this.userservice.put(id,this.registerForm.value ).subscribe(res => {
      /*this.router.navigate(['/profile/account/:id']);*/
      this.ngOnInit();
      }
    );
    
    

    })
   
  
  
  }
  

}
