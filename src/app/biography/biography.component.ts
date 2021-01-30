import { Component, OnInit } from '@angular/core';
import { bioData, BioInt } from 'src/assets/data/bio';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.css'],
})
export class BiographyComponent implements OnInit {
  details: BioInt[] = [];
  constructor() {}

  ngOnInit(): void {
    this.details = bioData;
  }
}
