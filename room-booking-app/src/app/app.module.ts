import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import {
	MatToolbarModule,
	MatIconModule,
	MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatButtonModule
} from '@angular/material';

import { MatInputModule } from '@angular/material/input'
import { AppbarComponent } from './appbar/appbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LoginPageComponent } from './login-page/login-page.component'

import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    AppbarComponent,
    SideNavComponent,
    LoginPageComponent
  ],
  imports: [
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
	  HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
