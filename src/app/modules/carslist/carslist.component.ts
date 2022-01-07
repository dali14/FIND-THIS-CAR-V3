import { Component, OnInit } from '@angular/core';
import { CarsService } from "src/app/services/cars.service";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-carslist',
  templateUrl: './carslist.component.html',
  styleUrls: ['./carslist.component.css']
})
export class CarslistComponent implements OnInit {
  public dataSource: any = [];
  
  constructor(
    private carService :CarsService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.carService.all().subscribe(
      res => this.dataSource =res
    );
    
  }
  
  onDelete(id: string) {
    
    if (confirm('Are you sure to delete this Car?')) {
      this.carService.delete(id)
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


