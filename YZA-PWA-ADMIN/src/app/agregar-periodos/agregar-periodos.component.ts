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
    tituloPrimerPeriodo: new FormControl(''),
    primerPeriodoFechaInicio: new FormControl(''),
    primerPeriodoFechaFin: new FormControl(''),
    tituloSegundoPeriodo: new FormControl(''),
    segundoPeriodoFechaInicio: new FormControl(''),
    segundoPeriodoFechaFin: new FormControl(''),
  });

  constructor(private aps: APService) { }

  ngOnInit(): void { }


  Agregar() {
    console.log('form value', this.periodoForm.value);

    let newPerido = { ...this.periodoForm.value };

    console.log('newPeriodo', newPerido);

    this.aps.crearPeriodo(newPerido).subscribe((data) => {
      console.log('data', data);
    });
  }

}
