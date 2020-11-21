import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalInstanceComponent } from './local-instance.component';

describe('LocalInstanceComponent', () => {
  let component: LocalInstanceComponent;
  let fixture: ComponentFixture<LocalInstanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalInstanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
