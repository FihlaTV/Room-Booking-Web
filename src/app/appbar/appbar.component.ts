import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FirebaseAuthenticationService} from '../services/firebase-authentication.service';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.css']
})
export class AppbarComponent implements OnInit {

screenName = "Login"
  constructor(public authService:FirebaseAuthenticationService,
  				private router:Router) { }

logout() {
    this.authService.logout().then(data => {
    	this.router.navigate(['/login']);
    });
  }

getUser() {
	console.log(this.authService.getUser());
}

  ngOnInit() {
  }

}
