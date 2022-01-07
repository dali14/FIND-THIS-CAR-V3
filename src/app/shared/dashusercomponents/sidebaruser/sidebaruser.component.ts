import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "src/app/services/auth.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserslistService } from 'src/app/services/userslist.service';


@Component({
  selector: 'app-sidebaruser',
  templateUrl: './sidebaruser.component.html',
  styleUrls: ['./sidebaruser.component.css']
})
export class SidebaruserComponent implements OnInit {
  
  public dataSource: any = [];
  constructor(
    public authService: AuthService,
    public router: Router,
    public formBuilder: FormBuilder,
    public user:UserslistService) {}
    iduser:string;

  ngOnInit(): void {
    this.iduser = localStorage.getItem('userid');
    this.iduser = this.iduser.slice(1,-1);

    this.user.get(this.iduser).subscribe(
      res => this.dataSource =res
    )
  }
  logout(){
    this.authService.logout()
  }

}
