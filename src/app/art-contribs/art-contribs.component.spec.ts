import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtContribsComponent } from './art-contribs.component';

describe('ArtContribsComponent', () => {
  let component: ArtContribsComponent;
  let fixture: ComponentFixture<ArtContribsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtContribsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtContribsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
