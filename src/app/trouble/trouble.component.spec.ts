import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroubleComponent } from './trouble.component';

describe('TroubleComponent', () => {
  let component: TroubleComponent;
  let fixture: ComponentFixture<TroubleComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TroubleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TroubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy('troubleshooting component does not build');
  });

  it('should render the title', () => {
    expect(compiled.querySelector('h1').textContent).toBe(
      'Troubleshooting',
      'does not render title correctly'
    );
  });
});
