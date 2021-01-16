import { Component, OnInit } from '@angular/core';
import { botCommands } from 'src/assets/data/manual-commands/botCommands';
import { gameCommands } from 'src/assets/data/manual-commands/gameCommands';
import { generalCommands } from 'src/assets/data/manual-commands/generalCommands';
import { moderationCommands } from 'src/assets/data/manual-commands/moderationCommands';
import { serverCommands } from 'src/assets/data/manual-commands/serverCommands';
import { CommandInt } from 'src/assets/interfaces/CommandInt';
@Component({
  selector: 'app-man-command',
  templateUrl: './man-command.component.html',
  styleUrls: ['./man-command.component.css'],
})
export class ManCommandComponent implements OnInit {
  constructor() {}
  botCommands: CommandInt[] = [];
  gameCommands: CommandInt[] = [];
  generalCommands: CommandInt[] = [];
  moderationCommands: CommandInt[] = [];
  serverCommands: CommandInt[] = [];
  ngOnInit(): void {
    this.botCommands = botCommands;
    this.gameCommands = gameCommands;
    this.generalCommands = generalCommands;
    this.moderationCommands = moderationCommands;
    this.serverCommands = serverCommands;
  }
}
