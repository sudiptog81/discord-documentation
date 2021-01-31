import { ComponentFixture, TestBed } from '@angular/core/testing';
import { configCommands } from 'src/assets/data/config';

import { BotConfigComponent } from './bot-config.component';

describe('BotConfigComponent', () => {
  let component: BotConfigComponent;
  let fixture: ComponentFixture<BotConfigComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotConfigComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy('bot config component does not build');
  });

  it('should have the correct properties', () => {
    expect(component.configCalls).toBeTruthy('missing configCalls property');
    expect(component.configCalls.length).toEqual(
      configCommands.length,
      'incorrect number of config commands'
    );
  });

  it('should render the title', () => {
    expect(compiled.querySelector('h1').textContent).toBe(
      'Configure your Server',
      'does not render title'
    );
  });

  it('should render a config correctly', () => {
    const configItem = configCommands[0];
    const renderedConfig = compiled.querySelector('.config');
    expect(renderedConfig.querySelector('code').textContent).toBe(
      configItem.call,
      'does not render command call'
    );
    expect(renderedConfig.textContent).toContain(
      configItem.result,
      'does not render command result'
    );
  });

  it('should render all config items', () => {
    const configList = compiled.querySelectorAll('.config');
    expect(configList.length).toEqual(
      configCommands.length,
      'does not render all commands'
    );
  });
});
