import { Component, OnInit } from '@angular/core';
import { artInt, artList } from 'src/assets/data/artList';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css'],
})
export class ArtComponent implements OnInit {
  constructor() {}
  artList: artInt[] = [];
  ngOnInit(): void {
    this.artList = artList;
  }
}
