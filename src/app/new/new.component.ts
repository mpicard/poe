import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.styl']
})
export class NewComponent implements OnInit {

  content: string;

  constructor() { }

  ngOnInit() {
  }

}
