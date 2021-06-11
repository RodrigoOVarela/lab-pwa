import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public chemical : any;

  constructor() { }

  ngOnInit(): void {
    this.chemical = this.loadCities();
  }

  private loadCities(): any {
    return [
      { name: 'Acetona', id: '13' },
      { name: 'Albumina', id: '14' },
      { name: 'Amilase', id: '15' },
      { name: 'Anfetamina', id: '16' },
      { name: 'Cálcio', id: '1' },
      { name: 'A', id: '2' },
      { name: 'B', id: '3' },
      { name: 'C', id: '4' },
      { name: 'D', id: '5' },
      { name: 'E', id: '6' },
      { name: 'F', id: '7' },
      { name: 'G', id: '8' },
      { name: 'H', id: '9' },
      { name: 'I', id: '10' },
      { name: 'J', id: '11' },
      { name: 'K', id: '12' },
    ];
  }
}
