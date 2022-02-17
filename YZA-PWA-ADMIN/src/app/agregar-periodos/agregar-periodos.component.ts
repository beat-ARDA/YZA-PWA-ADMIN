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
    tituloPrimerPeriodo: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')]),
    primerPeriodoFechaInicio: new FormControl('', [Validators.required]),
    primerPeriodoFechaFin: new FormControl('', [Validators.required]),
    tituloSegundoPeriodo: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')]),
    segundoPeriodoFechaInicio: new FormControl('', [Validators.required]),
    segundoPeriodoFechaFin: new FormControl('', [Validators.required]),
  });
  submited: boolean = false
  datesErrors = {
    firstPeriodDates: false,
    seconsPeriodDates: false,
    datesInRage: false,
  }

  constructor(private aps: APService) {
  }

  ngOnInit(): void { }

  get formErrors() {
    return this.periodoForm.controls;
  }
  // Dates validations
  // This function validates if every date is in correct range
  private isDatesValid = (): boolean => {
    let invalid: boolean = false
    const fechai1 = this.periodoForm.get("primerPeriodoFechaInicio")?.value
    const fechaf1 = this.periodoForm.get("primerPeriodoFechaFin")?.value
    const fechai2 = this.periodoForm.get("segundoPeriodoFechaInicio")?.value
    const fechaf2 = this.periodoForm.get("segundoPeriodoFechaFin")?.value
    // This state works for showing errors on view
    this.datesErrors = {
      ...this.datesErrors,
      firstPeriodDates: !datesValidation(fechai1, fechaf1),
      seconsPeriodDates: !datesValidation(fechai2, fechaf2),
      datesInRage: dateInRange(fechai1, fechaf1, fechai2) || dateInRange(fechai1, fechaf1, fechaf2)
    }
    if (this.datesErrors.firstPeriodDates || this.datesErrors.seconsPeriodDates || this.datesErrors.datesInRage) {
      invalid = true
    }
    return invalid
  }

  Agregar() {
    this.submited = true
    if (!this.isDatesValid() && this.periodoForm.valid) {
      let newPerido = { ...this.periodoForm.value };
      try {
        this.aps.crearPeriodo(newPerido).subscribe((data) => {
          alert("Datos guardados con exito.")
          history.back()
        });
      } catch (error) {
        alert("Se produjo un error, intente más tarde.")
      }
    }
  }

}
