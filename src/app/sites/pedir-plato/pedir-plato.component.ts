import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-pedir-plato',
  templateUrl: './pedir-plato.component.html',
  styleUrls: ['./pedir-plato.component.css']
})
export class PedirPlatoComponent implements OnInit {

  constructor(private ApiService: ApiServiceService) { }

  ngOnInit(): void {

  }

  pedirPlatoProcess(){
    this.ApiService.pedirPlato().subscribe(data => {
      window.location.reload();
    })
  }

}
