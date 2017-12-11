import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { FirebaseAuthenticationService } from './services/firebase-authentication.service';
import * as firebase from "firebase";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  constructor(private authService: FirebaseAuthenticationService, private router: Router) {
  	console.log('app component.ts');
  	this.router = router;
  	  firebase.auth().onAuthStateChanged(function(user) {
  	  if (user) {
  	  	console.log('logged in. redirecting to /home')
  	    router.navigate(['/home']);
  	  } else {
  	    router.navigate(['/login']);
  	    console.log('not logged in. redirecting to /login')
  	  }
  	});
  }

}
