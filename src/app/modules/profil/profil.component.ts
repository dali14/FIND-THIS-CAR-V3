import { Component, OnInit } from '@angular/core';
import { UserslistService } from "src/app/services/userslist.service";
import { ActivatedRoute } from "@angular/router";
import {  Router } from "@angular/router";


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  public dataSource: any = [];

  constructor(
    private user :UserslistService ,private route :ActivatedRoute , private router :Router
    
  ) { }
  iduser:string;
  ngOnInit(): void {
    //this.route.paramMap.subscribe(params =>{
      //const id = params.get('id');
      
      this.iduser = localStorage.getItem('userid');
      
      this.iduser = this.iduser.slice(1,-1);

      if(this.iduser == "" ){
        this.router.navigate(['auth/login'])
        
      }else{
        
        this.user.get(this.iduser).subscribe(
          res => this.dataSource =res
          )
     
    }
    
  }

}
