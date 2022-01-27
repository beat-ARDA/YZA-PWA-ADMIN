import { Component, OnInit } from '@angular/core';
import { APService } from '../services/ap/ap.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-pantalla-principal',
  templateUrl: './agregar-periodos.component.html',
  styleUrls: ['./agregar-periodos.component.css']
})
export class AgregarPeriodosComponent implements OnInit {
  periodoForm = new FormGroup({
    guid: new FormControl(''),
    tituloi: new FormControl(''),
    fechai1: new FormControl(''),
    fechaf1: new FormControl(''),
    titulof: new FormControl(''),
    fechai2: new FormControl(''),
    fechaf2: new FormControl(''),
  });
  public guid: string;

  constructor(private aps: APService) {
    this.guid = "";
  }

  ngOnInit(): void {
  }

  GenerarGuid() {
    this.guid = this.aps.create_UUID();
  }

  Agregar() {
    this.periodoForm.controls['guid'].setValue(this.guid);
    this.aps.AgregarPeriodo(this.periodoForm);
  }

}
