import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chemical-detail',
  templateUrl: './chemical-detail.component.html',
  styleUrls: ['./chemical-detail.component.css']
})
export class ChemicalDetailComponent implements OnInit {
  public id: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => this.id = params['id']);
  }

  public back(){
    this.router.navigate(['/']);
  }

}
