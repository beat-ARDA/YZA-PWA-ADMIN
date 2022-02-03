import { Component, Input, OnInit } from '@angular/core';
import { AdService } from '../services/ad.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public titulo: string;

  constructor(public ad: AdService) {
    this.titulo = "YZA ADMIN";
  }

  ngOnInit() {
  }
}
