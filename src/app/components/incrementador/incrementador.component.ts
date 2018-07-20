import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input() leyenda: string = 'Leyenda';
  @Input() percent: number = 50;
  increment: string = '';
  @Output() emitter: EventEmitter<number> = new EventEmitter();


  constructor() { }

  ngOnInit() {
    this.increment = this.percent.toString();
  }

  onChange(newValue: string) {
    this.emitter.emit(parseInt(newValue));
  }

  changeProgress(value: number) {
    let next: number = parseInt(this.increment) + value;

    if ( next > 100 ) {
      next = 100;
    } else if ( next < 0 ) {
      next = 0;
    }

    if ( next >= 0 && next <= 100 ) {
      this.percent = next;
      this.increment = this.percent.toString();
      this.emitter.emit(this.percent);
    }
  }

}
