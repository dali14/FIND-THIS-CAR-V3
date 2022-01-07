import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionLoginService {
  LOGIN_URL ='http://localhost:3000/users/login';
  LOGOUT_URL ='';

  constructor(private httpClients : HttpClient) { }

  login(pUsername,pPassword){
    const loginData ={ 
      username:pUsername,
      password:pPassword
    }
    return new Observable<boolean>((observer)=>{
      this.httpClients.post(this.LOGIN_URL,loginData).subscribe(result =>{
        observer.next(true);
        observer.complete();
      }, error =>{
        observer.error(false);
        observer.complete();
      });
    
    });

  }


  logout(){
    return new Observable<boolean>((observer)=>{
      this.httpClients.get(this.LOGOUT_URL).subscribe(result => {
        observer.next(true);
        observer.complete();


      }, error => {
        observer.error(false);
        observer.complete();
      });
    })

  }


}
