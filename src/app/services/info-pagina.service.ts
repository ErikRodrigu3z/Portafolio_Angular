import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  loaded = false;

  constructor(private http: HttpClient) { 
    
    this.http.get('assets/data/data-page.json')
    .subscribe( (resp: InfoPagina) => {
      this.loaded = true;
      this.info = resp;

      // console.log("Pagina cargada");
      // console.log(resp);
      
    });

  }
}
