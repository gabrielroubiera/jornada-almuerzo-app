import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  readonly URL_API = "http://147.182.141.55:8000/api";
  constructor(private http: HttpClient) { }

  pedirPlato(){
    return this.http.get(`${this.URL_API}/pedir/plato`);
  }

  getRecetas(){
    return this.http.get(`${this.URL_API}/recetas`);
  }

  pedidosEnCola(){
    return this.http.get(`${this.URL_API}/pedidos/cola`);
  }

  historialPedidos(){
    return this.http.get(`${this.URL_API}/pedidos/historial`);
  }

  getIngredientesBodega(){
    return this.http.get(`${this.URL_API}/bodega`);
  }

  getHistorialIngredientesBodega(){
    return this.http.get(`${this.URL_API}/historial/ingredientes/bodega`);
  }
}
