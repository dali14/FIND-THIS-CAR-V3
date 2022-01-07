import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
import { UserslistService } from "src/app/services/userslist.service";

@Component({
  selector: 'app-userfind',
  templateUrl: './userfind.component.html',
  styleUrls: ['./userfind.component.css']
})
export class UserfindComponent implements OnInit {
  bgfinduser:string ='../assets/userlog/img/bgfinduser.jpg';
  bg: string ='../assets/img/vid2.m4v';
  public dataSource: any = [];
  constructor(
    private route : ActivatedRoute,
    private serviceuser : UserslistService,
    private router :Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      const id = params.get('id');
      
      this.finduser(id);

  })

}

finduser(userid: string){
    
  this.serviceuser.get(userid).subscribe(res => {
    
    if(res!=null) {
      
      this.dataSource =res ;
      
      
    }else{
      this.router.navigate(['/']);
    }
  });
  
  

}
}
