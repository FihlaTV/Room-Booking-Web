import { Component, OnInit } from '@angular/core';

import { FirebaseAuthenticationService } from './../services/firebase-authentication.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

 constructor(public authService:FirebaseAuthenticationService) { }


  ngOnInit() {
  }

}
