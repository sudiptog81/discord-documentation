import { Component, OnInit } from '@angular/core';
import { ArtInt, artList } from 'src/assets/data/artList';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css'],
})
export class ArtComponent implements OnInit {
  artList: ArtInt[] = [];
  constructor() {}
  ngOnInit(): void {
    this.artList = artList;
  }
}
