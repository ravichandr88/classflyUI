import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MatDialog,MatDialogConfig} from '@angular/material';
import { SignupComponent } from 'src/app/signup/signup.component';
import { AboutComponent } from 'src/app/about/about.component';
import { LoginComponent } from 'src/app/login/login.component';
import { PaymentComponent} from 'src/app/payment/payment.component';
import {StudentpostComponent} from 'src/app/studentpost/studentpost.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
 
  @Output() public sidenavToggle = new EventEmitter();
 
  constructor(private dialog:MatDialog) { }
 
  ngOnInit() {
  }
 
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  onCreateSignUp(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus= true;
    dialogConfig.width = "40%";
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
          onCreatePost(){
            //    const dialogConfig = new MatDialogConfig();
            //    dialogConfig.disableClose = true;
              //  dialogConfig.autoFocus= true;
                //dialogConfig.width = "40%";
                this.dialog.open(StudentpostComponent);
            
              }
 
}