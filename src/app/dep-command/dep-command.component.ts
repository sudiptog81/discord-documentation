import { Component, OnInit } from '@angular/core';
import { depCommandInt, depCommands } from 'src/assets/data/deprecated';

@Component({
  selector: 'app-dep-command',
  templateUrl: './dep-command.component.html',
  styleUrls: ['./dep-command.component.css'],
})
export class DepCommandComponent implements OnInit {
  constructor() {}
  deprecated: depCommandInt[] = [];
  ngOnInit(): void {
    this.deprecated = depCommands;
  }
}
