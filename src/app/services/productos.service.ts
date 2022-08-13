import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';



@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];

  constructor( private http: HttpClient ) { 
    this.CargarProductos();
  }

private CargarProductos(){
  this.http.get<Producto[]>('https://portafolio-angular-1a07a-default-rtdb.firebaseio.com/productos_idx.json')
  .subscribe((resp: Producto[]) => {
    this.productos = resp;

    setTimeout(() => {      
      this.cargando = false;
    }),5000;
  });
}





}
