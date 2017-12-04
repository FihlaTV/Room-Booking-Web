import { Component, OnInit } from '@angular/core';

import {FirebaseAuthenticationService} from '../services/firebase-authentication.service'


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
	 model: any = {};

  constructor(public authService:FirebaseAuthenticationService) { }

 login() {
	this.authService.login(this.model.username, this.model.password);	
  }

 signup() {
	this.authService.signup(this.model.username, this.model.password);
  }

 logout() {
    this.authService.logout();
  }

  ngOnInit() {
  }

}
