import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { FirebaseAuthenticationService } from './services/firebase-authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  constructor(public authService: FirebaseAuthenticationService) {
  	console.log('app component.ts');
  }

}
