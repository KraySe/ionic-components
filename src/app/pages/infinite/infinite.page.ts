import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  data: any[] = Array(20);

  @ViewChild(IonInfiniteScroll) infiniteScrol: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }


  public loadData(event) {
    setTimeout(() => {

      if (this.data.length > 50) {
        this.infiniteScrol.complete();
        this.infiniteScrol.disabled = true;
        return;
      }

      const newArr = Array(20);
      this.data.push(...newArr);

      event.target.complete();
    }, 1500);


  }

}
