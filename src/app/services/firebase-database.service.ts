import { Injectable } from '@angular/core';

import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';

import { AngularFireModule } from 'angularfire2';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseDatabaseService {


  eventsRef: AngularFireList<any[]>;
  myClub_EventRef: AngularFireList<any[]>;
  clubsRef: AngularFireObject<any[]>;
  eventsRefx: AngularFireObject<any[]>;
  myClubRef: any;
  allEvents: any = [];
  
  constructor(public db: AngularFireDatabase) {
    this.eventsRef = this.db.list("events");
    this.myClub_EventRef = this.db.list("clubs/" + JSON.parse(localStorage.getItem('user')).uid + "/events");
    this.clubsRef = this.db.object('clubs');
    this.myClubRef = this.db.object('clubs/' + JSON.parse(localStorage.getItem('user')).uid);
    console.log('firebase database service.ts');
    this.getAllMyEvents();
   }

   getAllMyEvents() {
    // let x:any = [];
      this.getMyEventIds().subscribe(ids => {
        if(ids.length < this.allEvents.length)
          this.allEvents = [];
      for(var id of ids) {
        console.log(id);
        this.getParticularEvent(id).subscribe(eventDetail => {
          if(eventDetail.key) {
            if(!this.checkExistance(eventDetail.key, eventDetail.payload.val()))
              this.allEvents.push({'id': eventDetail.key, 'event': eventDetail.payload.val()});
              console.log('pushing;');
              console.log(this.allEvents);
          }
            })
      }
    })
   }

   checkExistance(id, eventx): boolean {
    if(this.allEvents && id) {
      for (let event of this.allEvents) {
        if(event['id'] == id) {
          event['event'] = eventx;
          return true;
        }
      }
    }
    return false;
   }

   getParticularEvent(eventId) {
    let eventsRefx= this.db.object('events/' + eventId);
    return eventsRefx.snapshotChanges();
   }

   
   pushToDB(obj) {
    let nodeID:any = (JSON.stringify(this.eventsRef.push(obj)).split('firebaseio.com/events/')[1]).slice(0,-1);
    console.log(nodeID);
    let eventID:any = JSON.stringify(this.myClub_EventRef.push(nodeID));
    console.log(eventID);
   }

   getMyEventIds() {
    return this.myClub_EventRef.valueChanges();
   }

   getMyEventDetails() {
    // UNABLE TO return data from this
      this.myClub_EventRef.valueChanges().subscribe(vals => {
      for(var val of vals) {
        this.getParticularEvent(val).subscribe(event => {
          console.log(event);
        })
      }
    });
   }
    getMyClubDetails() {
        // subscribe to this wherever calling
        return this.myClubRef.valueChanges();
     }
}