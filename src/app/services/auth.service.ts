import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public notifyLogin$ = new Subject();

  constructor(private httpClient: HttpClient) { }

  



  login(data:any){
    return this.httpClient.post('http://localhost:3000/login',data);
  }

  register(data:any){
    return this.httpClient.post('http://localhost:3000/regist',data);
  }

  BloggerInfo(){
    return this.httpClient.get(`http://localhost:3000/getAllBloggers`);
  }

  MyBloggerInfo(){
    return this.httpClient.get(`http://localhost:3000/todo/getAllBloggers`);
  }

  getToken(){
    let token = localStorage.getItem('tokenns');

    if (token) this.notifyLogin$.next(true);
 
    return token;
  }
}

