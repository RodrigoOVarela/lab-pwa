import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  public items: MenuItem[];

  ngOnInit() {

    this.items = [
      { label: 'Dashboard', icon: 'fa-home' },
      { label: 'Dashboard', icon: 'fa-home' },
    ]
  }

}
