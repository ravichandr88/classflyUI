import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentpost',
  templateUrl: './studentpost.component.html',
  styleUrls: ['./studentpost.component.scss']
})
export class StudentpostComponent implements OnInit {
  languages: string[] = [
    'English','Kannada','Tamil','Hindi','Bengali','Assamese'
];

  constructor() { }

  ngOnInit() {
  }

}
