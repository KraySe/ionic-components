import { Component, OnInit, ViewChild } from '@angular/core';
import { IonItem } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/interfaces';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  menuOpt: Observable<Componente[]>;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.menuOpt = this.dataService.getMenuOpt();
  }
}
