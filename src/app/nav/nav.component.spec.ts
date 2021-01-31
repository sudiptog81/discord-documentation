import { ComponentFixture, TestBed } from '@angular/core/testing';
import { version } from '../../../package.json';

import { NavComponent } from './nav.component';

const navLinkText = [
  `Version ${version}`,
  'Create a Local Instance',
  'Set up the Code',
  'Deploy the Code',
  'Configure Your Server',
  'Automatic Commands',
  'Manual Commands',
  'Deprecated Commands',
  'Contribute to Becca Lyria',
  'Create a New Command',
  'Troubleshooting',
  'Privacy Policy',
  '© 2020 - Nicholas Carrigan',
  'Webpage art by Moonlight',
  'About Becca Lyria',
  `View Becca's Art`,
  'Create Art for Becca',
];

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy('nav component does not build');
  });

  it('should have the correct properties', () => {
    expect(component.version).toBeTruthy('missing version property');
    expect(component.version).toBe(
      version,
      'does not have correct version value'
    );
  });

  it('should render the title', () => {
    expect(compiled.querySelector('h1').textContent).toBe(
      'Becca Lyria Documentation',
      'does not render title'
    );
  });

  it('should render all expected navlinks', () => {
    const rendered = compiled.querySelectorAll('p');
    for (let i = 0; i < rendered.length; i++) {
      expect(rendered[i].textContent).toBe(
        navLinkText[i],
        `${navLinkText[i]} does not render correctly`
      );
    }
  });
});
