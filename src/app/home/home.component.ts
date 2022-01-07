import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from "@angular/forms";
import { Router} from "@angular/router";
import { CarsService } from "src/app/services/cars.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

public registerForm: FormGroup

  constructor(
    public formbilder:FormBuilder,
    public carsservice:CarsService,
    public router:Router) { 

    this.registerForm = this.formbilder.group({
      mat:['']
      
    });
          
  }

  ngOnInit(): void {

  }
  findcar(){
    const id = this.registerForm.get('mat').value;
        console.log(id);
        this.registerForm.reset();
        console.log('hi');
        this.router.navigate(['/find/',id]);
     

  }

  

}
