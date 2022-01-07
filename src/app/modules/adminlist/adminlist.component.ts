import { Component, OnInit } from '@angular/core';
import { AdminlistService } from 'src/app/services/adminlist.service';
@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styleUrls: ['./adminlist.component.css']
})
export class AdminlistComponent implements OnInit {
  public dataSource: any = [];
  constructor(
    private adminService :AdminlistService
  ){}

  ngOnInit(): void {
    this.adminService.all().subscribe(
      res => this.dataSource =res
    );
  }

}
