import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { FirebaseDatabaseService } from './../../services/firebase-database.service';

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
  events: EventData[] = [];
  name: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dbService: FirebaseDatabaseService,) {
    console.log('all-events constructor');
    // Create 100 events
    for (let event of this.allEvents) {
      console.log(event);
        let user:any = {
        id: '12',
        title: event['title'],
        start_date: event['start_date']
        color: 'red'
      }
      this.events.push(event);
    } 

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.allEvents);
    console.log('all event constructor');
    console.log(this.allEvents);
  }


  all() {
    this.name = 'bhawesh';
   JSON.parse(localStorage.getItem('events'));
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
    console.log('ng on itit called');
    if(this.allEvents.length <= 0) {
      this.getAllEvents();
      console.log('inside if of ngOnInit');
    }
  }

   getAllEvents() {
    //let x:any = [];
      this.dbService.getMyEventIds().subscribe(ids => {
      for(var id of ids) {
        this.dbService.getParticularEvent(id).subscribe(eventDetail => {
            if(!this.checkExistance(eventDetail.key, eventDetail.payload.val()))
              this.allEvents.push({'id': eventDetail.key, 'event': eventDetail.payload.val()});
        })
      }
    })
   }

   checkExistance(id, event): boolean {
    for (let event of this.allEvents) {
      if(event['id'] == id) {
        event['event'] = event;
        return true;
      }
    }
    return false;
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
