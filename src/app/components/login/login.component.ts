import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/service/news.service';
import { UserValidators, PasswordValidators} from '../shared/UserValidators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private newsService: NewsService) { }

  loginForm:any;

  ngOnInit(): void {
    this.loginForm = new FormGroup ({
      "userName": new FormControl('', UserValidators ),
      "password": new FormControl('', PasswordValidators)
    });
  }

  get userName() { return this.loginForm.get('userName'); };
  get password () { return this.loginForm.get('password'); };

  submitData(username:string, password:string){
    let output = this.newsService.chekUserName(username,password);
    if (output && this.loginForm.valid){
       this.router.navigate(['/profile']);
       this.loginForm.reset();
    } else{
      alert('Not corect');
    }
  }

}