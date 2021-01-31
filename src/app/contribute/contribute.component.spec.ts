import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributeComponent } from './contribute.component';

describe('ContributeComponent', () => {
  let component: ContributeComponent;
  let fixture: ComponentFixture<ContributeComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContributeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy('contribute component does not build');
  });

  it('should render the title', () => {
    expect(compiled.querySelector('h1').textContent).toBe(
      'Contributing to Becca',
      'does not render the title'
    );
  });
});
