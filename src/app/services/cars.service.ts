import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import {  Cars } from "../cars.module";
import { catchError,map  } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  API_URL:string = "http://localhost:3000/api/cars";
  API_URL2:string = "http://localhost:3000/api/Car";
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  list:Cars[];
  constructor(
    private http: HttpClient,
    public router: Router,
    private toastr: ToastrService) { }
  all(){
    return this.http.get(this.API_URL); // see all 
  }

  add(cars: Cars){
    return this.http.post<any>(`${this.API_URL}`,cars)
    .subscribe((res: any) => {
      
      this.router.navigate(['profile/mycars/']);
      this.toastr.success("Added successfully", 'Car Detail Register');
    })
  
  }
  
  get(id: string) {
    return this.http.get(this.API_URL + '/' + id)
  }

  
  getcarbymat(Matricule : string):Observable<any>{
    return this.http.get(this.API_URL + '/' + Matricule).pipe(
      catchError(this.handleError)
      )
  }

  getcarbyuserid(id: string): Observable<any>{
    return this.http.get(this.API_URL2 + '/' + id).pipe(
      catchError(this.handleError)
      )
  }

  delete(id: string) {
    return this.http.delete(`${this.API_URL}/${id}`); // delete cars 
  }
  /*update(){
    return this.http.put(`${this.API_URL}/${this.cars.idcar}`, this.cars);
  }*/


  refreshList() {
    this.http.get(this.API_URL)   // refcher liste 
      .toPromise()
      .then(res =>this.list = res as Cars[]);
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }


}
