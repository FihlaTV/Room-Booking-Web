import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.css']
})
export class RoomBookingComponent implements OnInit {

  rForm: FormGroup;
  title:string = '';
  desc:string = '';
  post: any;

  titleAlert:string = "title is required";

  constructor(private fb: FormBuilder) {

    this.rForm = fb.group({
      'title' : [null, Validators.required, false],
      'desc' : [null, Validators.compose(
                [Validators.required,
                Validators.minLength(5),
                Validators.maxLength(300)])],
      'check' : ''
    });
  }

  addPost(post) {
    this.title = post.title;
    this.desc = post.desc;
  }

  ngOnInit() {
        console.log('init');

    this.rForm.get('check').valueChanges.subscribe((checkName) => {
      if(checkName == "1") {
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
