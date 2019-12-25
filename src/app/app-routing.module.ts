import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OdrfrmComponent } from './odrfrm/odrfrm.component';
import { BlogComponent } from './blog/blog.component';
import { SignupComponent } from './signup/signup.component';
import { ArticleComponent } from './article/article.component';
import { WorddocComponent } from './worddoc/worddoc.component';
import { LoginComponent } from './login/login.component';
import { BlogviewComponent } from './blogview/blogview.component';
import { ProfileComponent } from './profile/profile.component';
import { NoteComponent } from './note/note.component';
import { AlphaComponent } from "./alpha/alpha.component";
import { TrainersignupComponent } from "./trainersignup/trainersignup.component";
import { TbkingclssComponent } from "./tbkingclss/tbkingclss.component"; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchclassComponent } from './searchclass/searchclass.component';
import { ForgotpsswdComponent } from './forgotpsswd/forgotpsswd.component';
import { EmailconfirmComponent } from './emailconfirm/emailconfirm.component';
import { PaymentComponent } from './payment/payment.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { BuyclsrmComponent } from './buyclsrm/buyclsrm.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component'
import { DescriptionComponent} from'./description/description.component';
import { FeedbackpopupComponent} from './feedbackpopup/feedbackpopup.component';
import { ScheduleclassComponent } from './scheduleclass/scheduleclass.component';
import {BookclasspopupComponent} from './bookclasspopup/bookclasspopup.component';
import { AccountdetailsComponent} from './accountdetails/accountdetails.component';
import {StudentsearchComponent} from './studentsearch/studentsearch.component';
import {StudentpostComponent} from'./studentpost/studentpost.component';


const routes: Routes = [
  {
    path:'studentp',
    component:StudentpostComponent
  },
  {
    path:'studentdash',
    component:StudentsearchComponent
  },
  {
    path:'accountdetails',
    component:AccountdetailsComponent
  },
  {
    path:'bookclasspop',
    component:BookclasspopupComponent
  },

  {
    path:'scheduleclass',
    component:ScheduleclassComponent
  },

  {
    path:'feedpop',
    component:FeedbackpopupComponent
  },

  {
    path:'desc',
    component:DescriptionComponent
  },
  {
    path:'', 
    component:HomeComponent
  },
  {
    path:'about', 
    component:AboutComponent
  },
  {
    path:'buyclassroom', 
    component:BuyclsrmComponent
  }
  ,
  {
    path:'complaint',
    component:ComplaintComponent
  }
  ,
  {
    path:'feedback',
    component:FeedbackComponent

  },
  {
    path:'confirmemail/:sess',
    component:EmailconfirmComponent
  },
  {
    path:'trainersignup',
    component:TrainersignupComponent
  }
  ,
  {
    path:'alpha',
    component:AlphaComponent
  }
  ,
  {
    path:'order',
    component:OdrfrmComponent
  }
  ,
  {
    path:'note',
    component:NoteComponent
  }
  ,
  {
    path:'blog',
    component:BlogComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'blogs',
    component:ArticleComponent
  },
  {
    path:'article',
    component:WorddocComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'articles',
    component:BlogviewComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'trainersignup/:access_token/:session_id',
    component:TrainersignupComponent
  }
  ,
  {
    path:'trainerbooking',
    component:TbkingclssComponent
  },
  {
    path:'dash',
    component:DashboardComponent
  },
  {
    path:'search',
    component:SearchclassComponent
  },
  {
    path:'forgotpassword',
    component:ForgotpsswdComponent
  },
  {
    path:'payment',
    component:PaymentComponent
  },
  {
    path:'dcp',
    component:TrainersignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
