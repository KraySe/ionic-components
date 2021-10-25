import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Componente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getUsuarios() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  public getMenuOpt() {
    return this.http.get<Componente[]>('/assets/data/menu-opts.json')
  }

  public getAlbums() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums')
  }
}
