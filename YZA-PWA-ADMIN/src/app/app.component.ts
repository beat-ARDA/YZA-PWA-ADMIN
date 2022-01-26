import { Component } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string;
  public url: string;

  constructor(private _router: Router) {
    this.title = "YZA-PWA-ADMIN"
    this.url = "";
    this._router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url.split("/")[1];
      }
    })

  }
}
