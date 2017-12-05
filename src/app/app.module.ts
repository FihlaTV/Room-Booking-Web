import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'
import 'rxjs/add/operator/map';
import { FlexLayoutModule } from "@angular/flex-layout";
import { Routes, RouterModule } from '@angular/router';


// Angular material
import {
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatButtonModule,
} from '@angular/material';
import { MatInputModule } from '@angular/material/input'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
// ==================================================================================


// components
import { AppComponent } from './app.component';
import { AppbarComponent } from './appbar/appbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LoginPageComponent } from './login-page/login-page.component';
// ===================================================================================

const routes: Routes = [
  // {path: '/', redirectTo:'/login', component : AppComponent, pathMatch: 'full'},
  {path: 'login', component : LoginPageComponent},
  {path: 'app', component : AppbarComponent},
  {path: 'sidenav', component : SideNavComponent}

]

// services
import { AuthenticationService } from './services/authentication.service';
import { FirebaseAuthenticationService } from './services/firebase-authentication.service';
// ====================================================================================


// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import * as firebase from 'firebase/app';
import { IconComponent } from './material-components/icon/icon.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDb_u_IGv1QMaSO2pswLK5zZhiTCRevj_c",
  authDomain: "room-booking-app-a56fe.firebaseapp.com",
  databaseURL: "https://room-booking-app-a56fe.firebaseio.com",
  projectId: "room-booking-app-a56fe",
  storageBucket: "",
  messagingSenderId: "530224814854"
};
// ========================================================================================

@NgModule({
  declarations: [
    AppComponent,
    AppbarComponent,
    SideNavComponent,
    LoginPageComponent,
    IconComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
	  MatToolbarModule,
	  MatIconModule,
	  MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatInputModule,
    MatButtonModule,
	  HttpModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthenticationService, FirebaseAuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
