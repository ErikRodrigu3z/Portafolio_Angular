import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  loaded = false;
  equipo: any[] = [];

  constructor(private http: HttpClient) { 
    this.CargarIfo();
    this.CargarEquipo();   

  }

  private CargarIfo(){
    this.http.get('assets/data/data-page.json')
    .subscribe( (resp: InfoPagina) => {
      this.loaded = true;
      this.info = resp;
    });
  }

  private CargarEquipo(){
    this.http.get('https://portafolio-angular-1a07a-default-rtdb.firebaseio.com/equipo.json')
    .subscribe( (resp: any[]) => {

      this.equipo = resp;
      // console.log(resp);
    });

  }


}
