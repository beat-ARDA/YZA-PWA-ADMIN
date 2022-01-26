import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarPeriodosComponent } from './agregar-periodos/agregar-periodos.component';
import { LoginComponent } from './login/login.component';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'principal', component: PantallaPrincipalComponent },
  { path: 'agregar-periodos', component: AgregarPeriodosComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
