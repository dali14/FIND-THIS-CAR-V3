import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpHeaders } from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import { Users } from "src/app/users.module"
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserslistService {
  private apiUrl = "http://localhost:3000/api/users";
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }
  all(){
    return this.http.get(this.apiUrl);
  }
  
  get(id: string) {
    return this.http.get(this.apiUrl + '/' + id)
  }

  put(id: string, user: any){
    return this.http.put(this.apiUrl + '/' + id, user)
    
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
