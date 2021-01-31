import { ComponentFixture, TestBed } from '@angular/core/testing';
import { artList } from 'src/assets/data/artList';

import { ArtComponent } from './art.component';

describe('ArtComponent', () => {
  let component: ArtComponent;
  let fixture: ComponentFixture<ArtComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy('art component does not build');
  });

  it('should have the correct properties', () => {
    expect(component.artList).toBeTruthy('missing property artList');
    expect(component.artList.length).toEqual(
      artList.length,
      'art component missing values in art list'
    );
  });

  it('should display the title', () => {
    expect(compiled.querySelector('h1').textContent).toBe(
      `Becca's Art!`,
      'title does not render'
    );
  });

  it('should display an art item correctly', () => {
    const artComponent = compiled.querySelector('.grid-box');
    const artData = component.artList[0];
    expect(artComponent.querySelector('.art-name').textContent).toBe(
      artData.artName,
      'does not render art name'
    );
    expect(artComponent.querySelector('.art-image').getAttribute('src')).toBe(
      '../../assets/img/art/' + artData.fileName,
      'does not display image'
    );
    expect(
      artComponent.querySelector('.artist-link').getAttribute('href')
    ).toBe(artData.artistUrl, 'does not display artist url');
    expect(artComponent.querySelector('.artist-link').textContent).toBe(
      artData.artist,
      'does not display artist'
    );
  });
});
