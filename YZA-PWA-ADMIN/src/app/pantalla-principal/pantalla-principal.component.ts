import { Component, OnInit } from '@angular/core';
import { ABSService } from '../services/abs/abs.service';
import { APService } from '../services/ap/ap.service';
import { IPeriodListVm } from '../models/periodo.model';
import { DownloadFileService } from '../services/downloadFile/download-file.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ICargaArchivo, IDetalleCargaArchivo } from '../models/log.model';
import { LogService } from '../services/log/log.service';

@Component({
  selector: 'app-pantalla-principal',
  templateUrl: './pantalla-principal.component.html',
  styleUrls: ['./pantalla-principal.component.css']
})
export class PantallaPrincipalComponent implements OnInit {

  public items: IPeriodListVm[] = [];
  public cargaArchivo: ICargaArchivo[] = [];
  public detalleCargaArchivo: IDetalleCargaArchivo[] = [];
  public closeModal: string = '';
  public cargaId: string ='';


  constructor(private abs: ABSService, private ps: APService, 
    private downloadFileService: DownloadFileService, private modalService: NgbModal, 
    private logService: LogService) { }

  ngOnInit(): void {
    this.obtenerPeriodos();
  }
  // GET all periods
  obtenerPeriodos() {
    this.ps.obtenerPeriodos().subscribe((periodos) => {
      this.items = periodos;
    });
  }

  UploadFiles(event: any, guid: string) {
    this.abs.uploadFiles(event, guid);
  }
  // Get blob file from the service downloads the document
  downloadExcelFile() {
    this.downloadFileService.getXlsFormat().subscribe((response: any) => {
      let dataType = response.type;
      let binaryData = [];
      binaryData.push(response);
      let downloadLink = document.createElement('a');
      downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, { type: dataType }));
      downloadLink.setAttribute('download', "PWA-Formato-Excel.xls");
      document.body.appendChild(downloadLink);
      downloadLink.click();
    });
  }


  openModaleliminarPeriodo(content: any, periodoId: string) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      if(res == 'Eliminar'){
        this.ps.eliminarPeriodo(periodoId).subscribe(() => {
          alert('Periodo eliminado correctamente');
        })
      }        
    });
  }

  log(content: any, periodoId: string){
    this.logService.obtenerCargaArchivoByPeriodoId(periodoId).subscribe((info) => {
      this.cargaArchivo = info;
      this.openModalLog(content);
    });
  }

  openModalLog(content: any) {
    this.modalService.open(content, {size:'lg', ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      console.log('Cerrado');
    });
  }

  verDetalleCarga(cargaId: string) {
    this.cargaId = cargaId;
    this.logService.obtenerDetalleCargaArchivo(cargaId).subscribe((info) => {
      this.detalleCargaArchivo = info;
    });
  }
}
