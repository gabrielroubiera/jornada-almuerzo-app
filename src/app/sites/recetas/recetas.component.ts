import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {

  dataRecetas: any = [];
  dataIngredientes: any = [];
  constructor(private ApiService: ApiServiceService) { }

  ngOnInit(): void {
    this.ApiService.getRecetas().subscribe(data => {
      this.dataRecetas = data;

      for(let i = 0; i < this.dataRecetas.length; i++){
        this.dataIngredientes.push(this.dataRecetas[i]);
      }

      console.log(this.dataIngredientes[0].ingredientes);
    });
  }

}
