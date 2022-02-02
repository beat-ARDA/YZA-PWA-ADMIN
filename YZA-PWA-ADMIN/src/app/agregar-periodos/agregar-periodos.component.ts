import { Component, OnInit } from '@angular/core';
import { APService } from '../services/ap/ap.service';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { dateInRange, datesValidation } from '../helpers/customValidations';

@Component({
  selector: 'app-pantalla-principal',
  templateUrl: './agregar-periodos.component.html',
  styleUrls: ['./agregar-periodos.component.css']
})
export class AgregarPeriodosComponent implements OnInit {
  periodoForm = new FormGroup({
    guid: new FormControl('', [Validators.required]),
    tituloi: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')]),
    fechai1: new FormControl('', [Validators.required]),
    fechaf1: new FormControl('', [Validators.required]),
    titulof: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')]),
    fechai2: new FormControl('', [Validators.required]),
    fechaf2: new FormControl('', [Validators.required]),
  });
  submited: boolean = false
  datesErrors = {
    firstPeriodDates: false,
    seconsPeriodDates: false,
    datesInRage: false,
  }
  // public guid: string;

  constructor(private aps: APService) {
    // this.guid = "";
  }

  ngOnInit(): void {
  }

  GenerarGuid() {
    // this.guid = this.aps.create_UUID();
    const guid = this.aps.create_UUID()
    this.periodoForm.controls['guid'].setValue(guid);
  }

  get formErrors() {
    return this.periodoForm.controls;
  }

  private isDatesValid = (): boolean => {
    let invalid: boolean = false
    const fechai1 = this.periodoForm.get("fechai1")?.value
    const fechaf1 = this.periodoForm.get("fechaf1")?.value
    const fechai2 = this.periodoForm.get("fechai2")?.value
    const fechaf2 = this.periodoForm.get("fechaf2")?.value

    this.datesErrors = {
      ...this.datesErrors,
      firstPeriodDates: !datesValidation(fechai1, fechaf1),
      seconsPeriodDates: !datesValidation(fechai2, fechaf2),
      datesInRage: dateInRange(fechai1, fechaf1, fechai2) || dateInRange(fechai1, fechaf1, fechaf2)
    }
    console.log(this.datesErrors)
    if (this.datesErrors.firstPeriodDates || this.datesErrors.seconsPeriodDates || this.datesErrors.datesInRage) {
      invalid = true
    }
    return invalid
  }

  Agregar() {
    // this.periodoForm.controls['guid'].setValue(this.guid);
    this.submited = true
    if (!this.isDatesValid() && this.periodoForm.valid) {
      this.aps.AgregarPeriodo(this.periodoForm);
    }
  }

}
