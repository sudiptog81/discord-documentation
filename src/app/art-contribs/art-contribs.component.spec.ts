import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtContribsComponent } from './art-contribs.component';

describe('ArtContribsComponent', () => {
  let component: ArtContribsComponent;
  let fixture: ComponentFixture<ArtContribsComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtContribsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtContribsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy('art contributions component does not build');
  });

  it('should display title', () => {
    expect(compiled.querySelector('h1').textContent).toBe(
      'Contributing Art for Becca',
      'title does not render'
    );
  });
});
