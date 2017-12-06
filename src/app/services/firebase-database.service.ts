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
   	this.itemsRef = this.db.list('club');

   	// this.items = this.itemsRef.snapshotChanges().map(changes => {
    //   return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    // });
   }

   getAllClubs() {
    return this.items = this.itemsRef.valueChanges();
   }

}



