import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotDeployComponent } from './bot-deploy.component';

describe('BotDeployComponent', () => {
  let component: BotDeployComponent;
  let fixture: ComponentFixture<BotDeployComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotDeployComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotDeployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy('bot deply component does not build');
  });

  it('should render the title', () => {
    expect(compiled.querySelector('h1').textContent).toBe(
      'Run Your Version of Becca',
      'does not render the title'
    );
  });
});
