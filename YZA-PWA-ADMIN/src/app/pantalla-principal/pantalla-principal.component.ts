import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pantalla-principal',
  templateUrl: './pantalla-principal.component.html',
  styleUrls: ['./pantalla-principal.component.css']
})
export class PantallaPrincipalComponent implements OnInit {

  public items: Array<any>;

  constructor() {
    this.items = [
      {
        tituloi: "p4",
        fechai1: "05/17/2022",
        fechaf1: "05/18/2022",
        titulof: "p11",
        fechai2: "05/19/2022",
        fechaf2: "05/20/2022"
      },
      {
        tituloi: "p4",
        fechai1: "05/17/2022",
        fechaf1: "05/18/2022",
        titulof: "p11",
        fechai2: "05/19/2022",
        fechaf2: "05/20/2022"
      }
    ]
  }

  ngOnInit(): void {
  }

}
