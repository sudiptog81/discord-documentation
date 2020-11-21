import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepCommandComponent } from './dep-command.component';

describe('DepCommandComponent', () => {
  let component: DepCommandComponent;
  let fixture: ComponentFixture<DepCommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepCommandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
