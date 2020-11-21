import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManCommandComponent } from './man-command.component';

describe('ManCommandComponent', () => {
  let component: ManCommandComponent;
  let fixture: ComponentFixture<ManCommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManCommandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
