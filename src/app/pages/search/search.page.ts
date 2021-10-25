import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  public albums: any[];
  public textSearch: string = '';

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {

    this.dataService.getAlbums().subscribe(albums => {
      this.albums = albums
    });

  }

  public onSearchChange(ev) {

    // console.log(ev);
    this.textSearch = ev.detail.value;


  }

}
