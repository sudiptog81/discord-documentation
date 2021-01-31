import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCommandComponent } from './new-command.component';

describe('NewCommandComponent', () => {
  let component: NewCommandComponent;
  let fixture: ComponentFixture<NewCommandComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewCommandComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy('new command component does not build');
  });

  it('should render the title', () => {
    expect(compiled.querySelector('h1').textContent).toBe(
      'How to Create New Commands',
      'does not render the title correctly'
    );
  });
});
