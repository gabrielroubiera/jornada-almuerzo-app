import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  readonly URL_API = "http://127.0.0.1:8000/api";
  constructor(private http: HttpClient) { }

  getIngredientesBodega(){
    return this.http.get(`${this.URL_API}/bodega`);
  }
}
