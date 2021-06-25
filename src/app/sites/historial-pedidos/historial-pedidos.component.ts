import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-historial-pedidos',
  templateUrl: './historial-pedidos.component.html',
  styleUrls: ['./historial-pedidos.component.css']
})
export class HistorialPedidosComponent implements OnInit {

  historialPedidos: any = [];
  constructor(private ApiService: ApiServiceService) { }

  ngOnInit(): void {
    this.ApiService.historialPedidos().subscribe(data => {
      this.historialPedidos = data;
    })
  }

}
