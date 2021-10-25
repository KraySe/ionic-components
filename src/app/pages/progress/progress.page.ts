import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  porcentaje: number = 0.05;

  constructor() { }

  ngOnInit() {
  }

  public rangeChange(ev: any) {
    console.log(ev.detail.value); // 1 a 100

    const rangeValue = ev.detail.value / 100;

    this.porcentaje = rangeValue;

  }

}
