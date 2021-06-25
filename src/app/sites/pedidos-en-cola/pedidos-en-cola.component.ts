import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-pedidos-en-cola',
  templateUrl: './pedidos-en-cola.component.html',
  styleUrls: ['./pedidos-en-cola.component.css']
})
export class PedidosEnColaComponent implements OnInit {

  data: any = [];
  constructor(private ApiService: ApiServiceService) { }

  ngOnInit(): void {
    this.ApiService.pedidosEnCola().subscribe(data => {
      this.data = data;
    })
  }

}
