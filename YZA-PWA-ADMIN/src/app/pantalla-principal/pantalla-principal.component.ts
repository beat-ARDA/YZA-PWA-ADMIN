import { Component, OnInit } from '@angular/core';
import { ABSService } from '../services/abs.service';
import { PeriodoItem } from '../models/periodo.model';

@Component({
  selector: 'app-pantalla-principal',
  templateUrl: './pantalla-principal.component.html',
  styleUrls: ['./pantalla-principal.component.css']
})
export class PantallaPrincipalComponent implements OnInit {

  public items: Array<PeriodoItem>;

  constructor(private abs: ABSService) {
    this.items = [
      new PeriodoItem("", "", "p4", "05/17/2022", "05/18/2022", "p11", "05/19/2022", "05/20/2022"),
      new PeriodoItem("", "", "p4", "05/17/2022", "05/18/2022", "p11", "05/19/2022", "05/20/2022")
    ]
  }

  ngOnInit(): void {

  }

  UploadFiles(event: any) {
    this.abs.uploadFiles(event);
  }
}
