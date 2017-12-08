import { Injectable } from '@angular/core';

import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';

import { AngularFireModule } from 'angularfire2';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseDatabaseService {

	itemsRef: AngularFireList<any[]>;
	items: Observable<any[]>;
	clubs: any[];

  constructor(public db: AngularFireDatabase) {
   	this.itemsRef = this.db.list("test");

   }
   getAllClubs() {
    return this.items = this.itemsRef.valueChanges();
  }
   pushToDB(obj) {
    let nodeID = JSON.stringify(this.itemsRef.push(obj)).split('firebaseio.com/')[1];
    console.log(nodeID);
    }
    // return this.itemsRef.push(obj);

}