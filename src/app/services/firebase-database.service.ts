import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class FirebaseDatabaseService {

	clubs: any[];

  constructor(public db:AngularFireDatabase) { }

  getAllClubs() {
  	return this.db.list('/club')
  		.subscribe(clubs => {
  			this.clubs = clubs;
  			console.log(this.clubs);
  		});
  }
}



