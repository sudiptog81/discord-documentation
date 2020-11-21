import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotDeployComponent } from './bot-deploy.component';

describe('BotDeployComponent', () => {
  let component: BotDeployComponent;
  let fixture: ComponentFixture<BotDeployComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotDeployComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotDeployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
