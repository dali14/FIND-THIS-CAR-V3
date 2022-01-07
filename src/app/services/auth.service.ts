import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient,HttpErrorResponse} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError,map  } from 'rxjs/operators';
import { Users } from "src/app/users.module";
import { Router } from '@angular/router';
import { LocalStorageService } from "src/app/services/local-storage.service";
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL:string ="http://localhost:3000/api";
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  public isLoggedIn:boolean = false;

  constructor(private httpClient: HttpClient,
    private localStorageService: LocalStorageService,
    public router: Router,
    private toastr: ToastrService
    ) { }

  signup(user: Users): Observable<any> {

    return this.httpClient.post(`${this.API_URL}/users/signup`, user).pipe(
        catchError(this.handleError)
    )
  }


  login(user: Users){
    
    return this.httpClient.post<any>(`${this.API_URL}/users/login`, user)
      .subscribe((res: any) => {
        this.isLoggedIn = true;
        this.localStorageService.set('access_token', res.token);
        this.localStorageService.set('userid', res.userId);
        this.localStorageService.set('username',res.Name);
        this.localStorageService.set('session', true );
        this.router.navigate(['profile/user/' + res.userId]);
        this.toastr.success("login Succes", 'hello '+res.Name);
        
      }
     
      
      )
     

      
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

  getUserProfile(id: string): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/auth/profile/${id}`, { headers: this.headers }).pipe(
      map((res: Object) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }
  
  getAccessToken() {
    return this.localStorageService.get('access_token');
  }
  getUserId() {
    return this.localStorageService.get('user').id;
  }

  logout() {
    this.localStorageService.set('access_token', "");
    this.localStorageService.set('userid', "");
    this.localStorageService.set('session', false);
    this.localStorageService.set('username',"");
    this.isLoggedIn = false;
    this.router.navigate(['/auth/login']);
  }

}
