import { AstVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
import { CarsService } from "src/app/services/cars.service";

@Component({
  selector: 'app-carfind',
  templateUrl: './carfind.component.html',
  styleUrls: ['./carfind.component.css']
})
export class CarfindComponent implements OnInit {
  bgfind:string ='../assets/userlog/img/bgfind.jpg';
  bg: string ='../assets/img/Vid.m4v';
  
public dataSource: any = [];

  constructor(
    private route : ActivatedRoute,
    private servicecar : CarsService,
    private router :Router
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      const mat = params.get('id');
      
      this.findcar(mat);
    });
  }

  findcar(matricule: string){
    
    this.servicecar.getcarbymat(matricule).subscribe(res => {
      
      if(res!=null) {
        
        this.dataSource =res ;
        
        
      }else{
        this.router.navigate(['/']);
      }
    });
    
    

  }

}
