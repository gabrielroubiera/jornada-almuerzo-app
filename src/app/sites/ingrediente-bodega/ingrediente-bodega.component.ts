import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-ingrediente-bodega',
  templateUrl: './ingrediente-bodega.component.html',
  styleUrls: ['./ingrediente-bodega.component.css']
})
export class IngredienteBodegaComponent implements OnInit {

  ingredientesBodega: any = [];
  constructor(private ApiService: ApiServiceService) { }

  ngOnInit(): void {
    this.ApiService.getIngredientesBodega().subscribe(data => {
      this.ingredientesBodega = data;
    })
  }

}
