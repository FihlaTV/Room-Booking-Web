import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FirebaseAuthenticationService} from '../services/firebase-authentication.service';
import {FirebaseDatabaseService} from '../services/firebase-database.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.css']
})
export class AppbarComponent implements OnInit {
clubs: Observable<any[]>;
clubName = "CRIBBL"
  constructor(public authService:FirebaseAuthenticationService,
  				private router:Router,
          private db:FirebaseDatabaseService) { }

  getAllClubs() {
    this.clubs = this.db.getAllClubs();
    this.clubs.forEach(club => {
            console.log(club);
        });
}

logout() {
    this.authService.logout().then(data => {
    	this.router.navigate(['/login']);
      // localStorage.clear();
    });
  }

getUser() {
	this.authService.getUser().subscribe(user => {
      console.log(user.email);
  console.log(localStorage.getItem('isLoggedIn'));
  });
}

  ngOnInit() {
  }

}
