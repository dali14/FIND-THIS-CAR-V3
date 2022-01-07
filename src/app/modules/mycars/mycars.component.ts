import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarsService } from "src/app/services/cars.service";
import {  Router } from "@angular/router";


@Component({
  selector: 'app-mycars',
  templateUrl: './mycars.component.html',
  styleUrls: ['./mycars.component.css']
})
export class MycarsComponent implements OnInit {
  public dataSource: any = [];
  
  constructor(
    public servicecar:CarsService,
    private toastr:ToastrService,
    private router :Router)
     { }
    iduser:string;
  ngOnInit(): void {

      this.iduser = localStorage.getItem('userid');
      this.iduser = this.iduser.slice(1,-1);

    



    if(this.iduser == "" ){
      this.router.navigate(['auth/login'])
      
    }else{
      
      this.servicecar.getcarbyuserid(this.iduser).subscribe(
        res => this.dataSource =res
      );
     

   
  }
  }

  onDelete(id: string) {
    
    if (confirm('Are you sure to delete this Car?')) {
      this.servicecar.delete(id)
        .subscribe(
          res => {
            this.ngOnInit();
            this.toastr.error("Deleted successfully", 'Car Detail Register');
            
          },
          err => { console.log(err) }
        )
    }
  }




}
