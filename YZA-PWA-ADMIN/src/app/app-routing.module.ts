import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarPeriodosComponent } from './agregar-periodos/agregar-periodos.component';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';
import { MsalGuard } from '@azure/msal-angular';

const routes: Routes = [
  {
    path: '', component: PantallaPrincipalComponent, canActivate: [MsalGuard]
  },
  {
    path: 'agregar-periodos', component: AgregarPeriodosComponent, canActivate: [MsalGuard]
  }];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    // Don't perform initial navigation in iframes
    initialNavigation: !isIframe ? 'enabled' : 'disabled'
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
