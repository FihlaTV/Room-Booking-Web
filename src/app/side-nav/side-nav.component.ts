import { Component, OnInit } from '@angular/core';

import { FirebaseDatabaseService } from './../services/firebase-database.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

 constructor(public dbService:FirebaseDatabaseService) { }

 getAllClubs() {
 	(this.dbService.getAllClubs().subscribe(val => {
 		console.log(val);
 	}));
 }

  ngOnInit() {
  }

}
