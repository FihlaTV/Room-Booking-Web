import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { FirebaseDatabaseService } from './../../services/firebase-database.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent {

  displayedColumns = ['id', 'name', 'title', 'color', 'buttons'];
  // dataSource: MatTableDataSource<EventData>;
  dataSource: any;

  events: EventData[] = [];
  allEvents: any = [];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dbService: FirebaseDatabaseService,
              private dialog: MatDialog,) {
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
    this.getAllMyEvents(); 
  }

  getAllMyEvents() {
    // let x:any = [];
    this.dbService.getMyEventIds().subscribe(ids => {
      if(ids.length < this.allEvents.length)
        this.allEvents = [];
      for(var id of ids) {
        console.log(id);
        this.dbService.getParticularEvent(id).subscribe(eventDetail => {
          if(eventDetail.key) {
            if(!this.checkExistance(eventDetail.key, eventDetail.payload.val()))
              this.allEvents.push({'id': eventDetail.key, 'event': eventDetail.payload.val()});
              this.dataSource = new MatTableDataSource(this.allEvents);
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
          }
        })
      }
    })
   }

   

   checkExistance(id, eventx): boolean {
    if(this.allEvents && id) {
      for (let event of this.allEvents) {
        if(event['id'] == id) {
          event['event'] = eventx;
          return true;
        }
      }
    }
    return false;
   }

  createEvents(eventx): EventData {
    return {
      id: eventx.id,
      title: eventx.event.title,
      start_date: eventx.event.start_date,
      end_date: eventx.event.end_date,
      isApproved: eventx.event.isApproved
    };
  }
  
  filterAll() {
    this.dataSource = new MatTableDataSource(this.allEvents);
  }

  filterApproved() {
    let x:any = [];
    for(let eventx of this.allEvents) {
      if(eventx['event'].isApproved)
        x.push(eventx);
    }
    this.dataSource = new MatTableDataSource(x);
    console.log(x);
  }

  filterPending() {
    let x:any = [];
    for(let eventx of this.allEvents) {
      if(!eventx['event'].isApproved)
        x.push(eventx);
    }
    this.dataSource = new MatTableDataSource(x);
    console.log(x);
  }

  alertx(x) {
    alert(x['id']);
  }

  editEvent(x) {
    alert(x['id']);
  }

  openDialog(row): void {
    let dialogRef = this.dialog.open(ViewEventDialog, {
      maxWidth: '400px',
      maxHeight: '500px',
      data: { id: row['id'], event: row['event']}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        console.log("routing to edit");
        
      } else {
        console.log("cancelled");
      }

    });
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
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



@Component({
  selector: 'viewEvent-dialog',
  templateUrl: './viewEvent-modal.html',
  styleUrls: ['./viewEvent-modal.css']
})
export class ViewEventDialog {
  acadBlocks = "AB-1, AB-2, NLH, IC, AB-5";
  firstYearBlocks = "V, VI, XVI, XVII";
  nonFirstYearBlocks = "IX, X, XIV, XV";
  messes = "FC, Annapurna, Apoorva";
  otherColleges = "KMC, SOC, WGSHA";
  today = new Date();

  constructor(
    public dialogRef: MatDialogRef<ViewEventDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router) { }

  cancelBut(): void {
    console.log("cancelled");
    this.dialogRef.close();
  }

  editEvent(data) {
    this.router.navigate(['eventBooking', 'edit', data.id]);
  }
}