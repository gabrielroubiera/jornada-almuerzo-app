import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-historial-ingredientes-bodega',
  templateUrl: './historial-ingredientes-bodega.component.html',
  styleUrls: ['./historial-ingredientes-bodega.component.css']
})
export class HistorialIngredientesBodegaComponent implements OnInit {

  historialIngredientesBodega: any = [];
  constructor(private ApiService: ApiServiceService) { }

  ngOnInit(): void {
    this.ApiService.getHistorialIngredientesBodega().subscribe(data => {
      this.historialIngredientesBodega = data;
    })
  }

}
