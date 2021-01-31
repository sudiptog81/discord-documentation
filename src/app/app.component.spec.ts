import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, NavComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    app = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy('app does not build');
  });

  it(`should have as title 'becca-lyria'`, () => {
    expect(app.title).toEqual('becca-lyria', 'app title is not correct');
  });

  it('should render navigation component', () => {
    const nav = compiled.querySelector('app-nav');
    expect(nav).toBeTruthy('navigation does not render');
  });

  it('should render router body component', () => {
    const body = compiled.querySelector('router-outlet');
    expect(body).toBeTruthy('router body does not render');
  });
});
