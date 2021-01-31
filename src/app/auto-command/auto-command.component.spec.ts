import { ComponentFixture, TestBed } from '@angular/core/testing';
import { autoCommands } from 'src/assets/data/automatic';

import { AutoCommandComponent } from './auto-command.component';

describe('AutoCommandComponent', () => {
  let component: AutoCommandComponent;
  let fixture: ComponentFixture<AutoCommandComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutoCommandComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy('auto command component does not build');
  });

  it('should have correct properties', () => {
    expect(component.commands).toBeTruthy('missing commands property');
    expect(component.commands.length).toEqual(
      autoCommands.length,
      'does not have correct number of commands'
    );
  });

  it('should render the title', () => {
    expect(compiled.querySelector('h1').textContent).toBe(
      'Automatic Commands',
      'does not render title'
    );
  });

  it('should render a command correctly', () => {
    const command = autoCommands[0];
    const commandRender = compiled.querySelector('.command');
    const commandName = commandRender.querySelector('code');
    expect(commandRender).toBeTruthy('commands do not render');
    expect(commandRender.textContent).toContain(
      command.description,
      'command description does not render'
    );
    expect(commandName.textContent).toBe(
      command.name,
      'command name does not render'
    );
  });

  it('should render all commands', () => {
    const commandList = compiled.querySelectorAll('.command');
    expect(commandList.length).toEqual(
      autoCommands.length,
      'does not render all commands'
    );
  });
});
