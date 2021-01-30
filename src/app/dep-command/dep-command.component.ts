import { Component, OnInit } from '@angular/core';
import { DepCommandInt, depCommands } from 'src/assets/data/deprecated';

@Component({
  selector: 'app-dep-command',
  templateUrl: './dep-command.component.html',
  styleUrls: ['./dep-command.component.css'],
})
export class DepCommandComponent implements OnInit {
  deprecated: DepCommandInt[] = [];
  constructor() {}
  ngOnInit(): void {
    this.deprecated = depCommands;
  }
}
