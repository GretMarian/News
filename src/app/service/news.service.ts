import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root'}) export class NewsService {

  constructor( private http: HttpClient, private router: Router ) { }

  loginForm:any;

  url = "https://newsapi.org/v2/everything?q=Apple&from=2021-09-18&sortBy=popularity&apiKey=753156de85524a18a7f5b82f759a0386";
  
  getData():Observable<any>{
    return this.http.get(this.url);
  }

  chekUserName(username:string, password:string){
    if (username === 'admin' && password === '12345'){
      localStorage.setItem('username',"admin")
      return true;
    } else {
      return false;
    }

  }
}