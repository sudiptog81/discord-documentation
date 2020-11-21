import { Component, OnInit } from '@angular/core';
import { configCommandInterface, configCommands } from 'src/assets/data/config';

@Component({
  selector: 'app-bot-config',
  templateUrl: './bot-config.component.html',
  styleUrls: ['./bot-config.component.css'],
})
export class BotConfigComponent implements OnInit {
  constructor() {}
  configCalls: configCommandInterface[] = [];
  ngOnInit(): void {
    this.configCalls = configCommands;
  }
}
