import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UserslistService } from 'src/app/services/userslist.service';
import { Users } from 'src/app/users.module';

@Component({
  selector: 'app-headeruser',
  templateUrl: './headeruser.component.html',
  styleUrls: ['./headeruser.component.css']
})
export class HeaderuserComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  public loginForm: FormGroup;
  public dataSource: any = [];


  constructor(
    public authService: AuthService,
    public formBuilder: FormBuilder , 
    private user :UserslistService) 
    {}
    iduser:string;
    

  ngOnInit(): void {
    this.iduser = localStorage.getItem('userid');
    this.iduser = this.iduser.slice(1,-1);
    
    //console.log(id);

  }
  toggleSideBar(){
    this.toggleSideBarForMe.emit();

  }
  logout(){
    this.authService.logout()
  }
}
