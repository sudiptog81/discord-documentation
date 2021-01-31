import { ComponentFixture, TestBed } from '@angular/core/testing';
import { bioData } from 'src/assets/data/bio';

import { BiographyComponent } from './biography.component';

describe('BiographyComponent', () => {
  let component: BiographyComponent;
  let fixture: ComponentFixture<BiographyComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BiographyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy('biography does not build');
  });

  it('should have the correct properties', () => {
    expect(component.details).toBeTruthy('missing details property');
    expect(component.details.length).toEqual(
      bioData.length,
      'does not have the correct biography data'
    );
  });

  it('should render the title', () => {
    expect(compiled.querySelector('h1').textContent).toBe(
      'About Becca',
      'does not render title'
    );
  });

  it('should render a biodata item correctly', () => {
    const bioItem = bioData[0];
    const container = compiled.querySelector('div');
    const header = container.querySelector('h2');
    const content = container.querySelector('p');
    expect(header.textContent).toEqual(
      bioItem.category,
      'does not render the category'
    );
    expect(content.textContent).toEqual(
      bioItem.data,
      'does not render the data correctly'
    );
  });

  it('should render all biodata items', () => {
    const dataSet = compiled.querySelectorAll('div');
    expect(dataSet.length).toEqual(
      bioData.length,
      'does not render all biodata items'
    );
  });
});
