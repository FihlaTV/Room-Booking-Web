import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { FlexLayoutModule } from "@angular/flex-layout";
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


// Angular material
import {
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatButtonModule,
  MatNativeDateModule,
} from '@angular/material';
import { MatInputModule } from '@angular/material/input'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { IconComponent } from './material-components/icon/icon.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
// ==================================================================================


// components
import { AppComponent } from './app.component';
import { AppbarComponent } from './appbar/appbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { EventBookingComponent } from './components/event-booking/event-booking.component'
import { RoomBookingComponent } from './components/room-booking/room-booking.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
// ===================================================================================

const routes: Routes = [
  {path: 'app', component : AppComponent},
  {path: 'login', component : LoginPageComponent},
  {path: 'eventBooking', component : EventBookingComponent},
  {path: 'roomBooking', component : RoomBookingComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'home', component: HomeComponent},
  {path: 'sidenav', component: SideNavComponent}

]

// services
import { AuthenticationService } from './services/authentication.service';
import { FirebaseAuthenticationService } from './services/firebase-authentication.service';
import { FirebaseDatabaseService } from './services/firebase-database.service';
// ====================================================================================


// firebase
import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import * as firebase from 'firebase/app';


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
    IconComponent,
    FooterComponent,
    EventBookingComponent,
    RoomBookingComponent,
    ProfileComponent,
    HomeComponent
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
    MatCardModule,
    MatGridListModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,

    HttpModule,
    FormsModule,
    ReactiveFormsModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [AuthenticationService, FirebaseAuthenticationService, FirebaseDatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
