import { Component, OnInit } from '@angular/core';

import { FirebaseDatabaseService } from './../services/firebase-database.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

 allEve: any = [];
 constructor(public dbService:FirebaseDatabaseService) { }

	getAllEvents() {
	    this.dbService.getMyEventIds().subscribe(ids => {
			for(var id of ids) {
				this.dbService.getParticularEvent(id).subscribe(eventDetail => {
					this.allEve.push({'id': eventDetail.key, 'event': eventDetail.payload.val()});
					console.log(this.allEve);
				})
			}
		})
	}
  
  ngOnInit() { }

}
