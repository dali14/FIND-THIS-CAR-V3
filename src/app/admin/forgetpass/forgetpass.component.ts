import { Component, OnInit } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetpassComponent implements OnInit {
  hide = true;
  graph4:string='./assets/admin/graph4.svg';
  
  constructor() { }
  ngOnInit(): void {
  }

}
