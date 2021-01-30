import { Component, OnInit } from '@angular/core';
import { EnvVariableInterface, envVariables } from 'src/assets/data/env';

@Component({
  selector: 'app-bot-setup',
  templateUrl: './bot-setup.component.html',
  styleUrls: ['./bot-setup.component.css'],
})
export class BotSetupComponent implements OnInit {
  envVars: EnvVariableInterface[] = [];
  constructor() {}
  ngOnInit(): void {
    this.envVars = envVariables;
  }
}
