import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCommandComponent } from './auto-command.component';

describe('AutoCommandComponent', () => {
  let component: AutoCommandComponent;
  let fixture: ComponentFixture<AutoCommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoCommandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
