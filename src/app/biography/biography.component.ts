import { Component, OnInit } from '@angular/core';
import { BioData, BioInt } from 'src/assets/data/bio';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.css']
})
export class BiographyComponent implements OnInit {

  constructor() { }
  details: BioInt[] = [];
  ngOnInit(): void {
    this.details = BioData;
  }

}
