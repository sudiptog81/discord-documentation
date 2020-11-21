import { Component, OnInit } from '@angular/core';
import { manCommandInt, manCommands } from 'src/assets/data/manual';

@Component({
  selector: 'app-man-command',
  templateUrl: './man-command.component.html',
  styleUrls: ['./man-command.component.css'],
})
export class ManCommandComponent implements OnInit {
  constructor() {}
  commands: manCommandInt[] = [];
  ngOnInit(): void {
    this.commands = manCommands;
  }
}
