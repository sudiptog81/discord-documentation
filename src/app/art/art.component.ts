import { Component, OnInit } from '@angular/core';
import {
  ArtInt,
  comissionedList,
  generatedList,
} from 'src/assets/data/artList';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css'],
})
export class ArtComponent implements OnInit {
  comissionedList: ArtInt[] = [];
  generatedList: ArtInt[] = [];
  constructor() {}
  ngOnInit(): void {
    this.comissionedList = comissionedList;
    this.generatedList = generatedList;
  }
}
