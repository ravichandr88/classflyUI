import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookclasspopup',
  templateUrl: './bookclasspopup.component.html',
  styleUrls: ['./bookclasspopup.component.scss']
})
export class BookclasspopupComponent implements OnInit {

  dates: string[] = [
    '04/Dec/2019','05/Dec/2019','06/Dec/2019','07/Dec/2019','08/Dec/2019','09/Dec/2019'
  ];

  times: string[] = [
              '4:00 PM','5:00 PM','6:00 PM','7:00 PM','8:00 PM','9:00 PM'
  ];
  languages: string[] = [
    'English','Kannada','Tamil','Hindi','Bengali','Assamese'
];
  constructor() { }

  ngOnInit() {
  }

}
