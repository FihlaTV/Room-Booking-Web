import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseAuthenticationService {
user: Observable<firebase.User>;
  
  constructor(public firebaseAuth: AngularFireAuth) {
   // this.firebaseAuth.authState.subscribe((auth) => {
   //   this.authState = auth;
     this.user = firebaseAuth.authState;
  }


  getUser() {
    return this.user;
  }

  signup(email: string, password: string) {
    return this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });   
  }

  login(email: string, password: string) {
    return this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        localStorage.setItem('user', JSON.stringify(user));
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  logout() {
    return this.firebaseAuth
      .auth
      .signOut()
      .then(value => {
        console.log("logged out successfully");
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });

  }
}