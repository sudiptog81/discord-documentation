import { Component, OnInit } from '@angular/core';
import { ConfigCommandInterface, configCommands } from 'src/assets/data/config';

@Component({
  selector: 'app-bot-config',
  templateUrl: './bot-config.component.html',
  styleUrls: ['./bot-config.component.css'],
})
export class BotConfigComponent implements OnInit {
  configCalls: ConfigCommandInterface[] = [];
  constructor() {}
  ngOnInit(): void {
    this.configCalls = configCommands;
  }
}
