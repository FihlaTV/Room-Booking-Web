import { Component} from '@angular/core';
import { FirebaseAuthenticationService } from './../services/firebase-authentication.service';
import { FirebaseDatabaseService } from './../services/firebase-database.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

 constructor(private authService: FirebaseAuthenticationService, private dbService: FirebaseDatabaseService) { }
 getUser() {
 	this.dbService.isFA().subscribe(res => {
 		console.log(res);
 	})
 }
}
