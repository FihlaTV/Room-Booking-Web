import { Injectable } from '@angular/core';

import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';

import { AngularFireModule } from 'angularfire2';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseDatabaseService {

	eventsRef: AngularFireList<any[]>;
  clubsRef: AngularFireList<any[]>;
	items: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
   	this.eventsRef = this.db.list("events");
    this.clubsRef = this.db.list("clubs/" + JSON.parse(localStorage.getItem('user')).uid + "/events");

   }
   getAllClubs() {
    return this.items = this.eventsRef.valueChanges();
  }
   pushToDB(obj) {
    let nodeID:any = JSON.stringify(this.eventsRef.push(obj)).split('firebaseio.com/events/')[1];
    console.log(nodeID);
    let eventID:any = JSON.stringify(this.clubsRef.push(nodeID));
    console.log(eventID);
    }
}