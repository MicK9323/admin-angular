import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-graficodona',
  templateUrl: './graficodona.component.html',
  styles: []
})
export class GraficodonaComponent implements OnInit {

  @Input('data')
  public chartData: number[];

  @Input('labels')
  public chartLabels: string[];

  @Input('type')
  public chartType: string;

  constructor() { }

  ngOnInit() {
  }

}
