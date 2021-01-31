import { ComponentFixture, TestBed } from '@angular/core/testing';
import { envVariables } from 'src/assets/data/env';

import { BotSetupComponent } from './bot-setup.component';

describe('BotSetupComponent', () => {
  let component: BotSetupComponent;
  let fixture: ComponentFixture<BotSetupComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotSetupComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy('bot setup component does not build');
  });

  it('should have the correct properties', () => {
    expect(component.envVars).toBeTruthy('missing envVars property');
    expect(component.envVars.length).toEqual(
      envVariables.length,
      'does not have correct number of env variables'
    );
  });

  it('should render the title', () => {
    expect(compiled.querySelector('h1').textContent).toBe(
      'Creating Your Bot Application and Connecting it to Your Instance'
    );
  });

  it('should render an env variable correctly', () => {
    const variable = envVariables[0];
    const rendered = compiled.querySelector('.envVar');
    expect(rendered.querySelector('code').textContent).toBe(
      variable.name,
      'does not render variable name'
    );
    expect(rendered.textContent).toContain(
      variable.optional,
      'does not render optional/required state'
    );
    expect(rendered.querySelector('span').textContent).toBe(
      variable.description,
      'does not render variable description'
    );
  });

  it('should render all env variables', () => {
    const varList = compiled.querySelectorAll('.envVar');
    expect(varList.length).toEqual(
      envVariables.length,
      'does not render all variables'
    );
  });
});
