import { Component, OnInit } from '@angular/core';
import { FirebaseDatabaseService } from './../../services/firebase-database.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';

import * as moment from 'moment';

@Component({
  selector: 'app-event-booking',
  templateUrl: './event-booking.component.html',
  styleUrls: ['./event-booking.component.css']
})
export class EventBookingComponent implements OnInit {

  static Publicity = class {
    poster: any;
    banner: any;
    infodesk: any;
    digboard: any;
    pub_start_date: string;
    constructor() { }
  }

  static Event = class {
    external: boolean;
    title: string;
    desc: string;
    start_date: string;
    end_date: string;
    publish_date: string;
    publicity: any;

    constructor() {
      this.publicity = new EventBookingComponent.Publicity();
      this.publish_date = moment().format('L');
    }
  }

  generalFormGroup: FormGroup;
  publicityFormGroup: FormGroup;
  post: any;
  event = new EventBookingComponent.Event();

  constructor(private fb: FormBuilder,
              private dbService: FirebaseDatabaseService) {
    this.generalFormGroup = this.fb.group({
      'external': '',
      'title': ['', Validators.required],
      'desc': ['', Validators.required],
      'start_date': ['', Validators.required],
      'end_date': ['', Validators.required],
    });
    this.publicityFormGroup = this.fb.group({
      'pub_poster': '',
      'pub_banner': '',
      'pub_infodesk': '',
      'pub_digboard': '',
      'pub_start_date': ['', Validators.required],
    });
  }

  generalSubmit(post) {
    this.event.external = post.external;
    this.event.title = post.title;
    this.event.desc = post.desc;
    this.event.start_date = moment(post.start_date).format('L');
    this.event.end_date = moment(post.end_date).format('L');
    console.log(this.event);
  }

  publicitySubmit(post) {
    debugger;
    this.event.publicity.poster = post.pub_poster;
    this.event.publicity.banner = post.pub_banner;
    this.event.publicity.infodesk = post.pub_infodesk;
    this.event.publicity.digboard = post.pub_digboard;
    this.event.publicity.pub_start_date = moment(post.pub_start_date).format('L');
    console.log(this.event);
    this.dbService.pushToDB(this.event);

  }



  ngOnInit() { }

}
