import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AdminlistService {
  private apiUrl = "http://localhost:3000/api/admins";

  constructor(private http: HttpClient) { }
  all(){
    return this.http.get(this.apiUrl);
  }
  get(id:string){}
  create(admin:any){}
  update(id: string,admin:any){}
  delete(id:string){}
}
