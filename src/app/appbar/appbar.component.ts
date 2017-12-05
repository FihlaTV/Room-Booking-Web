import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FirebaseAuthenticationService} from '../services/firebase-authentication.service';
import {FirebaseDatabaseService} from '../services/firebase-database.service';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.css']
})
export class AppbarComponent implements OnInit {

clubName = "CRIBBL"
  constructor(public authService:FirebaseAuthenticationService,
  				private router:Router,
          private db:FirebaseDatabaseService) { }

getAllClubs() {
  this.db.getAllClubs();
}

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
