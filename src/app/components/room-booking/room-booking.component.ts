import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FirebaseDatabaseService } from './../../services/firebase-database.service';

import * as moment from 'moment';

@Component({
  selector: 'app-room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.css']
})


export class RoomBookingComponent implements OnInit {

static Publicity = class {
  type: string;
  qty: number;

  constructor() {
    this.type = "poster";
    this.qty = 4;
  }
}

static Event = class {
  title: string;
  desc: string;
  check: boolean;
  date: string;
  start_date: string;
  end_date: string;
  publish_date: string;
  publ: any;

  constructor() {
    this.publ = new RoomBookingComponent.Publicity();
    this.end_date = moment("12-25-1995", "MM-DD-YYYY").format('L');
    this.publish_date = moment().format('L');
  }
}
  rForm: FormGroup;
  title:string = '';
  desc:string = '';
  post: any;
  date: string;
  value="sdfsdfsdf";
  titleAlert:string = "title is required";
  descValidator:any = Validators.compose(
              [Validators.required,
              Validators.minLength(5),
              Validators.maxLength(300)]);

  constructor(private fb: FormBuilder,
              private dbService: FirebaseDatabaseService) {


    this.rForm = fb.group({
      'title' : [null, Validators.required],
      'desc' : [null, this.descValidator],
      'check' : '',
      'date' : ''
    });
  }

  addPost(post) {
    this.title = post.title;
    this.desc = post.desc;
    let x = moment(post.date).format("L");
    // console.log(post.title + "   " + post.check);
    // console.log(x);
    let event  = new RoomBookingComponent.Event();
    event.title = post.title;
    event.desc = post.desc;
    event.check = post.check;
    event.start_date = moment(post.date).format('L');
    event.publ.type="sfdfsdf";
    // console.log(event);
    this.dbService.pushToDB(event);
  }

  ngOnInit() {
        console.log('init');

    this.rForm.get('check').valueChanges.subscribe((check) => {
      if(check == "1") {
        this.rForm.get('title').setValidators([Validators.required, Validators.minLength(4)]);
        this.titleAlert = "atleast 4 chars rqd now";
        console.log('inside if');
      }
      else {
        this.rForm.get('title').setValidators([Validators.required]);
        console.log('inside else');
      }
      this.rForm.get('title').updateValueAndValidity();
    })
   }

}
