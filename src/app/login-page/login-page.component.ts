import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {FirebaseAuthenticationService} from '../services/firebase-authentication.service'
import * as firebase from "firebase";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
	 model: any = {};

  constructor(public authService:FirebaseAuthenticationService,
              private router:Router,) { 

  this.router = router;
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    router.navigate(['/home']);
  } else {
    console.log("NOT logged in");
  }
});
  }

 login() {
	this.authService.login(this.model.username, this.model.password);
  localStorage.setItem('isLoggedIn', 'true');
  }

 signup() {
	this.authService.signup(this.model.username, this.model.password);
  }

 logout() {
    this.authService.logout();
  }

  ngOnInit() {
    // this.router.navigate(['/app']) 
  }

}
