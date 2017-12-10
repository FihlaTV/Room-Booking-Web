import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { FirebaseDatabaseService } from './../../services/firebase-database.service';
import { EventClass } from './../../classes/event';

import * as moment from 'moment';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent implements OnInit {

  displayedColumns = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<EventData>;

  allEvents: any = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dbService: FirebaseDatabaseService,
              private eve: EventClass) {
    // Create 100 users
    const users: EventData[] = [];
    let user:any = {
    	id: '12',
    	title: 'Bhawesh',
    	start_date: '33',
    	color: 'red'
    }
    for (let i = 1; i <= 100; i++) { users.push(user); }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
    console.log('hey');
  }


  all() {
    console.log(JSON.parse(localStorage.getItem('arr')));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  ngOnInit() {
    if(this.allEvents.length <= 0)
      this.getAllEvents();
  }

   getAllEvents() {
      this.dbService.getMyEventIds().subscribe(ids => {
      for(var id of ids) {
        this.dbService.getParticularEvent(id).subscribe(eventDetail => {
          this.allEvents.push({'id': eventDetail.key, 'event': eventDetail.payload.val()});
          
        })
      }
    })
   }
}

function createNewUser(id: number): EventData {
  const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    title: name,
    start_date: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}

const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface EventData {
  id: string;
  title: string;
  start_date: string;
  color: string;
}
