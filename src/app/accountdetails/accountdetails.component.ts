import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataService } from '../data.service';
@Component({
  selector: 'app-accountdetails',
  templateUrl: './accountdetails.component.html',
  styleUrls: ['./accountdetails.component.scss']
})
export class AccountdetailsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AccountdetailsComponent>,private api:DataService) { }

  ngOnInit() {
  }
  accerr:string=''
  ifscerr:string=''
  usererr:string = ''
  otp:boolean = false
  data={
    'ifsc':'',
    'accno':'',
    'accno2':'',
    'name':'',
    'UPI':'',
    'phone':'+91',
    'session_id':sessionStorage.getItem('user')
  }

  resp:Object
  close()
  {
    //ifsc validation
    if(this.data['ifsc']=='')
    {
      this.ifscerr='Please fill the feild'
      return
    }
    else this.ifscerr='';

    //account number validation
    if(this.data['accno']=='' || this.data['accno2'] == '')
    {
      this.accerr = 'Please fill in the feilds'
    }
    else if(this.data['accno'].match(/^[0-9]+$/) == null)
    {
      this.accerr = 'Only digits Please'
    }
    else if(this.data['accno'] != this.data['accno2'])
    {
      this.accerr = 'Both account number do not match'
      return
    }
    else this.accerr='';

    //acc holder name
    if(this.data['name']=='')
    {
      this.usererr='Please fill the feilds'
      return
    }
    else this.usererr = ''

    this.singup()

   
    
    // this.dialogRef.close(this.data);
  }

  //post the account details
   saveacct()
   {
   this.api.traineracc(this.data).subscribe(
    api => this.resp = api,
    (err) => console.log(err),
    () => this.succall(this.resp)
  )
   }

  succall(resp)
  {
    if(resp.code == 200)
    {
      alert('Go to your email and confirm ZOOM account')
      this.dialogRef.close()
    }
    else if(resp.code == 201)
    {
      // sessionStorage.setItem
      this.dialogRef.close()
      
    }
    else{
      alert(resp.message)
    }
  } 




  //rest serices for Kii
  signresp:Object
  code:string=''
  loginresp:Object
  Kiiacctkn:string=''
  verresp:Object
  //signup code
 singup()
 {
   this.api.kiisignup(this.data['phone']).subscribe(
     api => this.signresp = api,
     (err) => console.log(err),
     () => this.signupsucc(this.signresp)
   )
 }

 signupsucc(data)
 {

  if(data['userID']==null)
  {
    alert(data['message'])
  }

  else
  {
    this.api.kiilogin().subscribe(
      api => this.loginresp = api,
      (err)=>{},
      ()=> this.loginsuc(this.loginresp)
    )
  }
 }

 //login success
 loginsuc(resp)
 {
  this.Kiiacctkn = resp['access_token']
  this.otp = true
 }


 verify()
 {
   this.api.Kiiverify({'session':this.Kiiacctkn,'code':this.code}).subscribe(
     api => this.verresp = api,
     (err) => {alert('Wrond OTP')},
    () => {
      this.saveacct()
    }
   )
 }


}
