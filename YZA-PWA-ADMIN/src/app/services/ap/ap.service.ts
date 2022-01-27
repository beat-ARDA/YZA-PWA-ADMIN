import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PeriodoItem } from 'src/app/models/periodo.model';

@Injectable({
  providedIn: 'root'
})
export class APService {

  public periodoData: Array<PeriodoItem>

  constructor() {
    this.periodoData = [];
  }

  create_UUID(): string {
    let dt = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }

  AgregarPeriodo(formulario: FormGroup) {
    this.periodoData.push(
      new PeriodoItem(
        "",
        "",
        formulario.value.guid,
        formulario.value.tituloi,
        formulario.value.fechai1,
        formulario.value.fechaf1,
        formulario.value.titulof,
        formulario.value.fechai2,
        formulario.value.fechaf2
      ));
  }

  ObtenerPeriodos() {
    return this.periodoData;
  }
}
