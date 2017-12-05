import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class FirebaseDatabaseService {

	clubs: any[];

  constructor(public db:AngularFireDatabase) { }

}



