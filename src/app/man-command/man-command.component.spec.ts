import { ComponentFixture, TestBed } from '@angular/core/testing';
import { botCommands } from 'src/assets/data/manual-commands/botCommands';
import { emoteCommands } from 'src/assets/data/manual-commands/emoteCommands';
import { gameCommands } from 'src/assets/data/manual-commands/gameCommands';
import { generalCommands } from 'src/assets/data/manual-commands/generalCommands';
import { moderationCommands } from 'src/assets/data/manual-commands/moderationCommands';
import { serverCommands } from 'src/assets/data/manual-commands/serverCommands';

import { ManCommandComponent } from './man-command.component';

describe('ManCommandComponent', () => {
  let component: ManCommandComponent;
  let fixture: ComponentFixture<ManCommandComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManCommandComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy('manual command component does not build');
  });

  it('should have the correct properties', () => {
    expect(component.botCommands).toBeTruthy('missing botCommands property');
    expect(component.botCommands.length).toEqual(
      botCommands.length,
      'incorrect bot commands value'
    );
    expect(component.emoteCommands).toBeTruthy(
      'missing emoteCommands property'
    );
    expect(component.emoteCommands.length).toEqual(
      emoteCommands.length,
      'incorrect emoteCommands value'
    );
    expect(component.gameCommands).toBeTruthy('missing gameCommands property');
    expect(component.gameCommands.length).toEqual(
      gameCommands.length,
      'incorrect gameCommands value'
    );
    expect(component.generalCommands).toBeTruthy(
      'missing generalCommands property'
    );
    expect(component.generalCommands.length).toEqual(
      generalCommands.length,
      'incorrect generalCommands value'
    );
    expect(component.moderationCommands).toBeTruthy(
      'missing moderationCommands property'
    );
    expect(component.moderationCommands.length).toEqual(
      moderationCommands.length,
      'incorrect moderationCommands value'
    );
    expect(component.serverCommands).toBeTruthy(
      'missing serverCommands property'
    );
    expect(component.serverCommands.length).toEqual(
      serverCommands.length,
      'incorrect serverCommands value'
    );
  });

  it('should render a bot command correctly', () => {
    const commandData = botCommands[0];
    const rendered = compiled.querySelector('.bot-command');
    expect(rendered.querySelector('code').textContent).toContain(
      commandData.name,
      'does not render command name'
    );
    if (commandData.parameters) {
      expect(rendered.querySelectorAll('span')[0].textContent).toBe(
        ' ' + commandData.parameters,
        'does not render commandData parameters'
      );
      expect(rendered.querySelectorAll('span')[1].textContent).toBe(
        commandData.description,
        'does not render commandData description'
      );
    } else {
      expect(rendered.querySelector('span').textContent).toBe(
        commandData.description,
        'does not render description'
      );
    }
  });

  it('should render an emote command correctly', () => {
    const commandData = emoteCommands[0];
    const rendered = compiled.querySelector('.emote-command');
    expect(rendered.querySelector('code').textContent).toContain(
      commandData.name,
      'does not render command name'
    );
    if (commandData.parameters) {
      expect(rendered.querySelectorAll('span')[0].textContent).toBe(
        ' ' + commandData.parameters,
        'does not render commandData parameters'
      );
      expect(rendered.querySelectorAll('span')[1].textContent).toBe(
        commandData.description,
        'does not render commandData description'
      );
    } else {
      expect(rendered.querySelector('span').textContent).toBe(
        commandData.description,
        'does not render description'
      );
    }
  });

  it('should render a game command properly', () => {
    const commandData = gameCommands[0];
    const rendered = compiled.querySelector('.game-command');
    expect(rendered.querySelector('code').textContent).toContain(
      commandData.name,
      'does not render command name'
    );
    if (commandData.parameters) {
      expect(rendered.querySelectorAll('span')[0].textContent).toBe(
        ' ' + commandData.parameters,
        'does not render commandData parameters'
      );
      expect(rendered.querySelectorAll('span')[1].textContent).toBe(
        commandData.description,
        'does not render commandData description'
      );
    } else {
      expect(rendered.querySelector('span').textContent).toBe(
        commandData.description,
        'does not render description'
      );
    }
  });

  it('should render a general command properly', () => {
    const commandData = generalCommands[0];
    const rendered = compiled.querySelector('.general-command');
    expect(rendered.querySelector('code').textContent).toContain(
      commandData.name,
      'does not render command name'
    );
    if (commandData.parameters) {
      expect(rendered.querySelectorAll('span')[0].textContent).toBe(
        ' ' + commandData.parameters,
        'does not render commandData parameters'
      );
      expect(rendered.querySelectorAll('span')[1].textContent).toBe(
        commandData.description,
        'does not render commandData description'
      );
    } else {
      expect(rendered.querySelector('span').textContent).toBe(
        commandData.description,
        'does not render description'
      );
    }
  });

  it('should render a moderation command properly', () => {
    const commandData = moderationCommands[0];
    const rendered = compiled.querySelector('.moderation-command');
    expect(rendered.querySelector('code').textContent).toContain(
      commandData.name,
      'does not render command name'
    );
    if (commandData.parameters) {
      expect(rendered.querySelectorAll('span')[0].textContent).toBe(
        ' ' + commandData.parameters,
        'does not render commandData parameters'
      );
      expect(rendered.querySelectorAll('span')[1].textContent).toBe(
        commandData.description,
        'does not render commandData description'
      );
    } else {
      expect(rendered.querySelector('span').textContent).toBe(
        commandData.description,
        'does not render description'
      );
    }
  });

  it('should render a server command properly', () => {
    const commandData = serverCommands[0];
    const rendered = compiled.querySelector('.server-command');
    expect(rendered.querySelector('code').textContent).toContain(
      commandData.name,
      'does not render command name'
    );
    if (commandData.parameters) {
      expect(rendered.querySelectorAll('span')[0].textContent).toBe(
        ' ' + commandData.parameters,
        'does not render commandData parameters'
      );
      expect(rendered.querySelectorAll('span')[1].textContent).toBe(
        commandData.description,
        'does not render commandData description'
      );
    } else {
      expect(rendered.querySelector('span').textContent).toBe(
        commandData.description,
        'does not render description'
      );
    }
  });

  it('should render all commands', () => {
    const bot = compiled.querySelectorAll('.bot-command');
    const emote = compiled.querySelectorAll('.emote-command');
    const game = compiled.querySelectorAll('.game-command');
    const general = compiled.querySelectorAll('.general-command');
    const mod = compiled.querySelectorAll('.moderation-command');
    const server = compiled.querySelectorAll('.server-command');
    expect(bot.length).toEqual(
      botCommands.length,
      'does not render all bot commands'
    );
    expect(emote.length).toEqual(
      emoteCommands.length,
      'does not render all emote commands'
    );
    expect(game.length).toEqual(
      gameCommands.length,
      'does not render all game commands'
    );
    expect(general.length).toEqual(
      generalCommands.length,
      'does not render all general commands'
    );
    expect(mod.length).toEqual(
      moderationCommands.length,
      'does not render all moderation commands'
    );
    expect(server.length).toEqual(
      serverCommands.length,
      'does not render all server commands'
    );
  });
});
