import { Component, OnInit } from '@angular/core';
import { UserslistService } from "src/app/services/userslist.service";
@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
  public dataSource: any = [];
  public nom!:string;
  constructor(
    private userService : UserslistService
  ) { }

  ngOnInit(): void {

    this.userService.all().subscribe(
      res => this.dataSource =res
    );
  }
  search(){
    if(this.nom != ""){
      this.dataSource = this.dataSource.filter(res=>{
        return res.Name.toLowerCase().match(this.nom.toLocaleLowerCase())


      })
    }else if(this.nom == ""){
      this.ngOnInit();
    }
    
      
  }

}
