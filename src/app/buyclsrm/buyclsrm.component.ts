import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { BuyclassdescpopComponent } from '../buyclassdescpop/buyclassdescpop.component';
import {MatDialog,MatDialogConfig} from '@angular/material';


@Component({
  selector: 'app-buyclsrm',
  templateUrl: './buyclsrm.component.html',
  styleUrls: ['./buyclsrm.component.scss']
})
export class BuyclsrmComponent implements OnInit {

  constructor(private data:DataService,private router:Router,private dialog:MatDialog) { }

  resp
  details
  ngOnInit() {
   // if(sessionStorage.getItem('tid') == null)
   // {
  //    alert('Not a trainer')
  //    this.router.navigate(['/'])
  //  }
    //else
    // if(!sessionStorage.getItem('feed'))
    //{
     // alert('You cannot access until you give feedback')
     // this.router.navigate(['/feedback'])
   // }

    this.data.buyclsdetails().subscribe(
      data => this.resp = data,
      (err) => console.log(err),
      () => this.sucresp(this.resp)
    )
  }

  sucresp(resp)
  {
    if(resp.code==200)
    {
this.details = resp.data
    }
    else
    {
      alert('Something went wrong,Please try again later')
    }
  }



  buyresp

  buy(id)
  {
    
  window.open("http://localhost:8000/api/buyclassroom/"+sessionStorage.getItem('tid')+'/'+id, "_blank");

  }
  onCreateDesc(){
    this.dialog.open(BuyclassdescpopComponent)
  }


}
