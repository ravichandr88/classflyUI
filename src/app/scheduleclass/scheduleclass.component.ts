import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BookclasspopupComponent } from '../bookclasspopup/bookclasspopup.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-scheduleclass',
  templateUrl: './scheduleclass.component.html',
  styleUrls: ['./scheduleclass.component.scss']
})
export class ScheduleclassComponent implements OnInit {

  constructor(private dialog:MatDialog,private router:Router) { }

  ngOnInit() {
    
  }
  onCreateBook(){
    this.dialog.open(BookclasspopupComponent)
  }
  btnClick=function() {
    this.router.navigate('/buyclassroom');
};

}
