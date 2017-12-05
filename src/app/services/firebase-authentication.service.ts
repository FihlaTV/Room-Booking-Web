import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

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
    return this.firebaseAuth
    .auth
    .currentUser();
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
      .then(value => {
        console.log('Nice, it worked!');
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