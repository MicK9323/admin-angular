import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-percent',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  percent1: number = 50;
  percent2: number = 30;

  constructor() { }

  ngOnInit() {
  }

}
