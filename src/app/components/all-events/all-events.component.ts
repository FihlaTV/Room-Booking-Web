import { Component, OnInit, ViewChild, SimpleChanges } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { FirebaseDatabaseService } from './../../services/firebase-database.service';

import * as moment from 'moment';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent {

  displayedColumns = ['id', 'name', 'title', 'color'];
  dataSource: MatTableDataSource<EventData>;

  events: EventData[] = [];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dbService: FirebaseDatabaseService,) {
    console.log('all-events constructor');
    console.log(dbService.eventsRef);
    // Create 100 events
    // for (let event of this.allEvents) {
    //   console.log(event);
    //     let user:any = {
    //     id: '12',
    //     title: event['title'],
    //     start_date: event['start_date']
    //     color: 'red'
    //   }
    //   this.events.push(event);
    // } 

    // Assign the data to the data source for the table to render
    for(let eventx of this.dbService.allEvents) {
      this.events.push(this.createEvents(eventx));
    }

    this.dataSource = new MatTableDataSource(this.events);
    console.log('all event constructor');
    console.log(this.dbService.allEvents);
  }

  createEvents(eventx): EventData {
    return {
      id: eventx.id,
      title: eventx.event.title,
      start_date: eventx.event.start_date,
      end_date: eventx.event.end_date,
      isApproved: eventx.event.approved
    };
  }

  all() { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  
   

}
export interface EventData {
  id: string;
  title: string;
  start_date: string;
  end_date: string;
  isApproved: string;
}
