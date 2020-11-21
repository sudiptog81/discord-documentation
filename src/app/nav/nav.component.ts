import { Component, OnInit } from '@angular/core';
import { version } from '../../../package.json';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor() {}
  version: string = '0.0.0';
  ngOnInit(): void {
    this.version = version;
  }
}
