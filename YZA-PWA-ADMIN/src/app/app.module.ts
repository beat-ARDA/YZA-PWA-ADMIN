import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarPeriodosComponent } from './agregar-periodos/agregar-periodos.component';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ABSService } from './services/abs/abs.service';
import { APService } from './services/ap/ap.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AgregarPeriodosComponent,
    PantallaPrincipalComponent,
    LoginComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    ABSService,
    APService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
