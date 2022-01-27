import { Component, OnInit } from '@angular/core';
import { ABSService } from '../services/abs/abs.service';
import { APService } from '../services/ap/ap.service';
import { PeriodoItem } from '../models/periodo.model';

@Component({
  selector: 'app-pantalla-principal',
  templateUrl: './pantalla-principal.component.html',
  styleUrls: ['./pantalla-principal.component.css']
})
export class PantallaPrincipalComponent implements OnInit {

  public items: Array<PeriodoItem>;

  constructor(private abs: ABSService, private ps: APService) {
    this.items = []
  }

  ngOnInit(): void {
    this.items = this.ps.ObtenerPeriodos();
  }

  UploadFiles(event: any, guid: string) {
    this.abs.uploadFiles(event, guid);
  }
}
