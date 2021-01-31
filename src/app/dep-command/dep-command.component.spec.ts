import { ComponentFixture, TestBed } from '@angular/core/testing';
import { depCommands } from 'src/assets/data/deprecated';

import { DepCommandComponent } from './dep-command.component';

describe('DepCommandComponent', () => {
  let component: DepCommandComponent;
  let fixture: ComponentFixture<DepCommandComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepCommandComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct properties', () => {
    expect(component.deprecated).toBeTruthy('missing deprecated property');
    expect(component.deprecated.length).toEqual(
      depCommands.length,
      'does not have the correct number of deprecated commands'
    );
  });

  it('should render the title', () => {
    expect(compiled.querySelector('h1').textContent).toBe(
      'Deprecated Features',
      'does not render the title'
    );
  });

  it('should render a deprecated command correctly', () => {
    const depCommand = depCommands[0];
    const rendered = compiled.querySelector('.command');
    expect(rendered.querySelector('code').textContent).toBe(
      depCommand.name,
      'does not render the name'
    );
    expect(rendered.querySelector('em').textContent).toBe(
      'deprecated in ' + depCommand.version,
      'does not render the version'
    );
    expect(rendered.textContent).toContain(
      depCommand.reason,
      'does not render the reason'
    );
  });

  it('should render all commands', () => {
    expect(compiled.querySelectorAll('.command').length).toEqual(
      depCommands.length,
      'does not render all commands'
    );
  });
});
