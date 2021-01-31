import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalInstanceComponent } from './local-instance.component';

describe('LocalInstanceComponent', () => {
  let component: LocalInstanceComponent;
  let fixture: ComponentFixture<LocalInstanceComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocalInstanceComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy('local instance component does not build');
  });

  it('should render the title', () => {
    expect(compiled.querySelector('h1').textContent).toBe(
      'Set up a Local Instance'
    );
  });
});
