import { Component, OnInit } from '@angular/core';
import { ABSService } from '../services/abs/abs.service';
import { APService } from '../services/ap/ap.service';
import { IPeriodListVm } from '../models/periodo.model';
import { environment } from 'src/environments/environment';
import { DownloadFileService } from '../services/downloadFile/download-file.service';

@Component({
  selector: 'app-pantalla-principal',
  templateUrl: './pantalla-principal.component.html',
  styleUrls: ['./pantalla-principal.component.css']
})
export class PantallaPrincipalComponent implements OnInit {

  public items: IPeriodListVm[] = [];

  constructor(private abs: ABSService, private ps: APService, private downloadFileService: DownloadFileService) { }

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
    const res = this.downloadFileService.getXlsFormat().subscribe((response: any) => {
      let dataType = response.type;
      let binaryData = [];
      binaryData.push(response);
      let downloadLink = document.createElement('a');
      downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, { type: dataType }));
      downloadLink.setAttribute('download', "PWA-Formato-Excel.xls");
      document.body.appendChild(downloadLink);
      downloadLink.click();
    });
    // window.open(environment.API_URL + environment.ENDPOINT_EXCEL_FORMAT, '_blank');
  }
}
