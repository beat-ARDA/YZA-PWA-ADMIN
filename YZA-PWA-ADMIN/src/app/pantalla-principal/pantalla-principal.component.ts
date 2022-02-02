import { Component, OnInit } from '@angular/core';
import { ABSService } from '../services/abs/abs.service';
import { APService } from '../services/ap/ap.service';
import { IPeriodListVm } from '../models/periodo.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pantalla-principal',
  templateUrl: './pantalla-principal.component.html',
  styleUrls: ['./pantalla-principal.component.css']
})
export class PantallaPrincipalComponent implements OnInit {

  public items: IPeriodListVm[] = [];

  constructor(private abs: ABSService, private ps: APService) { }

  ngOnInit(): void {
    this.obtenerPeriodos();
   }

  obtenerPeriodos() {
    this.ps.obtenerPeriodos().subscribe((periodos) => {
      this.items = periodos;
    });
  }

  UploadFiles(event: any, guid: string) {
    this.abs.uploadFiles(event, guid);
  }

  downloadExcelFile() {
    window.open(environment.API_URL + environment.ENDPOINT_EXCEL_FORMAT, '_blank');
  }
}
