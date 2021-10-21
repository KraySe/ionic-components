import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';
// import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  components: Observable<Componente[]>

  constructor(
    // private MenuCtrl: MenuController
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.components = this.dataService.getMenuOpt();
  }


  // public showMenu() {
  //   this.MenuCtrl.open('first');
  // }

}
