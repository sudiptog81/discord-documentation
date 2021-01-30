import { Component, OnInit } from '@angular/core';
import { AutoCommandInt, autoCommands } from 'src/assets/data/automatic';

@Component({
  selector: 'app-auto-command',
  templateUrl: './auto-command.component.html',
  styleUrls: ['./auto-command.component.css'],
})
export class AutoCommandComponent implements OnInit {
  commands: AutoCommandInt[] = [];
  constructor() {}

  ngOnInit(): void {
    this.commands = autoCommands;
  }
}
