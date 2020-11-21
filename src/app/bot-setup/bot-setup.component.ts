import { Component, OnInit } from '@angular/core';
import { envVariableInterface, envVariables } from 'src/assets/data/env';

@Component({
  selector: 'app-bot-setup',
  templateUrl: './bot-setup.component.html',
  styleUrls: ['./bot-setup.component.css'],
})
export class BotSetupComponent implements OnInit {
  constructor() {}
  envVars: envVariableInterface[] = [];
  ngOnInit(): void {
    this.envVars = envVariables;
  }
}
