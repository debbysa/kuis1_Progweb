import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas3',
  templateUrl: './tugas3.component.html',
  // styleUrls: ['./tugas3.component.css']
  styles:[`
        .up {
            color: white;
        }
    `]
})
export class Tugas3Component implements OnInit {
  kalimat = '';
  i=0;
  log =[];

  onClickMe() {
    this.kalimat = 'Deby Silvia Agnes';
    this.i++;
    this.log.push(this.i);
  }

  constructor() { }

  ngOnInit() {
  }


}
