import { Component, OnInit } from '@angular/core';
import { CarsService } from "src/app/services/cars.service";
import { UserslistService } from "src/app/services/userslist.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { NgForm } from '@angular/forms';
import { Cars } from 'src/app/cars.module';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-newcars',
  templateUrl: './newcars.component.html',
  styleUrls: ['./newcars.component.css']
})
export class NewcarsComponent implements OnInit {

  public dataSource: any = [];
  public registerForm: FormGroup;

  constructor(
    public carservice: CarsService,
    private toastr: ToastrService,
    public userservice :UserslistService ,
    private route :ActivatedRoute,
    public formBuilder: FormBuilder,
    public router :Router
    ) { 
      this.registerForm = this.formBuilder.group({
        id_user:[localStorage.getItem('userid').slice(1,-1)],
        mat1:[''],
        mat2:[''],
        model:[''],
        Matricule:[''],
      });
    }
    iduser:string;

  ngOnInit(): void {

    this.iduser = localStorage.getItem('userid');  
    this.iduser = this.iduser.slice(1,-1);

      //console.log(this.registerForm.value) ;

      if(this.iduser == "" ){

        this.router.navigate(['auth/login'])
        
      }else{
        
        this.userservice.get(this.iduser).subscribe(
          res => this.dataSource =res
        );
     
    }



  }


  newcar(){
    this.carservice.add(this.registerForm.value)/*.subscribe(res => {
      if(res.message == "car created !"){
        console.log('hi');
        this.registerForm.reset();
        this.router.navigate(['/profile/mycars']);
      }else{
        console.log('hi');
      }
    });*/
  }




}




/*
  onSubmit(form: NgForm) {
    /*if (this.service.formData.idcar == "0")
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }


  insertRecord(form: NgForm) {
    this.service.add().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Submitted successfully', 'Payment Detail Register');
      },
      err => { console.log(err); }
    );
  }
  updateRecord(form: NgForm) {
    this.service.update().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Updated successfully', 'Payment Detail Register')
      },
      err => { console.log(err); }
    );
  }
  resetForm(form: NgForm) {
    form.form.reset();
   
  }*/


