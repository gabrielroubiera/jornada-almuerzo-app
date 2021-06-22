import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PedirPlatoComponent } from './sites/pedir-plato/pedir-plato.component';
import { IngredienteBodegaComponent } from './sites/ingrediente-bodega/ingrediente-bodega.component';

@NgModule({
  declarations: [
    AppComponent,
    PedirPlatoComponent,
    IngredienteBodegaComponent
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
