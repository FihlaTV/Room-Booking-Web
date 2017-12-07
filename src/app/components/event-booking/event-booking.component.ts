import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';

import * as moment from 'moment';

@Component({
  selector: 'app-event-booking',
  templateUrl: './event-booking.component.html',
  styleUrls: ['./event-booking.component.css']
})
export class EventBookingComponent implements OnInit {

  mainForm: FormGroup;
  rForm: FormGroup;
  isChecked: boolean = false;

  minDate = new Date();
  
  constructor(private fb: FormBuilder) {

    this.rForm = fb.group({
      'type': '',
      'title': [null, this.titleValidator],
      'desc': [null, this.descValidator],
      'start_date': [null, Validators.required],
      'end_date': [null, Validators.required]
    })

    this.mainForm = fb.group({
      'poster': '',
      'infodesk': '';
      'banner': '',
      'digital-board': ''
    })
  }

  ngOnInit() {  }




  // Validators
  titleValidator = Validators.compose([Validators.required, Validators.maxLength(15)]);
  descValidator = Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(15)]);



}
