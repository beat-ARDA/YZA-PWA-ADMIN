import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';

const routes: Routes = [{ path: 'agregar-periodo', component: PantallaPrincipalComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
