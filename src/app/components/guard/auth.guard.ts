import { Injectable } from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import { NewsService } from "src/app/service/news.service";

@Injectable()
export class AuthGuard implements CanActivate{
 
    constructor(private router: Router, private newsService: NewsService) {}

    canActivate(){
        if (localStorage.getItem('username')!= null){
            return true; 
        } else {
            alert("First you must have autorization")
            this.router.navigate(['/login']);
            return false;
        }
    }
}