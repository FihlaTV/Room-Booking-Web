import { Component, Input, OnInit } from '@angular/core';

import {AppbarComponent} from './../../appbar/appbar.component';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {

@Input() icon: AppbarComponent;
  constructor() {}
  
  ngOnInit() {
  }

}
