import { Component, OnInit, Output, EventEmitter,HostListener } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ComplaintComponent } from 'src/app/complaint/complaint.component';
import { SignupComponent } from 'src/app/signup/signup.component';
import {LoginComponent} from 'src/app/login/login.component';
import {PaymentComponent} from 'src/app/payment/payment.component';
import { TrainersignupComponent } from 'src/app/trainersignup/trainersignup.component';
import { HelppopupComponent} from 'src/app/helppopup/helppopup.component'
import { ContactuspopupComponent } from 'src/app/contactuspopup/contactuspopup.component';


@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();
 
  constructor( private dialog:MatDialog) { }
  
  laptop:boolean = true
  user:boolean = false
  tid:boolean = false
  subscription
  ngOnInit()
  {
   
   if(sessionStorage.getItem('user') != null)
   {
     this.user = true
     if(sessionStorage.getItem('tid') != null)
     {
       this.tid = true
     }
   }
   if(window.innerWidth <500)
   {
     this.laptop = false
   }
  }

  @HostListener('window:resize', ['$event'])
    onResize(event) {
        if (event.target.innerWidth < 500) {
            this.sidenavClose.emit();
            this.laptop = false
        }
        else{
          this.laptop = true
        }
    }

 
  public onSidenavClose = () => {
    if(!this.laptop)
    {
      this.sidenavClose.emit();
    }
    
  }
  onCreateReport(){
    this.dialog.open(ComplaintComponent)
  }
  
  onCreateSignUp(){
    this.dialog.open(SignupComponent);

  }
  onCreateLogin(){
    //    const dialogConfig = new MatDialogConfig();
    //    dialogConfig.disableClose = true;
      //  dialogConfig.autoFocus= true;
        //dialogConfig.width = "40%";
        this.dialog.open(LoginComponent);
    
      }
      onCreateCoin(){
        //    const dialogConfig = new MatDialogConfig();
        //    dialogConfig.disableClose = true;
          //  dialogConfig.autoFocus= true;
            //dialogConfig.width = "40%";
            this.dialog.open(PaymentComponent);
        
          }
          onCreatetsign(){
            //    const dialogConfig = new MatDialogConfig();
            //    dialogConfig.disableClose = true;
              //  dialogConfig.autoFocus= true;
                //dialogConfig.width = "40%";
                this.dialog.open(TrainersignupComponent);
            
              }
              onCreateHelp(){
                this.dialog.open(HelppopupComponent);
            
              }
              onCreateContactUs(){
                this.dialog.open(ContactuspopupComponent);
            
              }

}

