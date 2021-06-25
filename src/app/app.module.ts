import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PedirPlatoComponent } from './sites/pedir-plato/pedir-plato.component';
import { IngredienteBodegaComponent } from './sites/ingrediente-bodega/ingrediente-bodega.component';
import { HistorialIngredientesBodegaComponent } from './sites/historial-ingredientes-bodega/historial-ingredientes-bodega.component';
import { PedidosEnColaComponent } from './sites/pedidos-en-cola/pedidos-en-cola.component';
import { HistorialPedidosComponent } from './sites/historial-pedidos/historial-pedidos.component';
import { RecetasComponent } from './sites/recetas/recetas.component';

@NgModule({
  declarations: [
    AppComponent,
    PedirPlatoComponent,
    IngredienteBodegaComponent,
    HistorialIngredientesBodegaComponent,
    PedidosEnColaComponent,
    HistorialPedidosComponent,
    RecetasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
