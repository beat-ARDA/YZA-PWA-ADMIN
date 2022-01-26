import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarPeriodosComponent } from './agregar-periodos/agregar-periodos.component';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarPeriodosComponent,
    PantallaPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
