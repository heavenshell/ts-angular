import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ClarityModule } from '@clr/angular';

import { GithubComponent } from '../../atoms/github/github.component';
import { TwitterComponent } from '../../atoms/twitter/twitter.component';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClarityModule],
      declarations: [GithubComponent, TwitterComponent, FooterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render', () => {
    const element: HTMLElement = fixture.debugElement.nativeElement;
    expect(
      element.querySelectorAll('footer div')[2].querySelector('span')
        .textContent
    ).toContain('Copyright');
  });

  it('should year to be current year', () => {
    expect(component.year).toBe(new Date().getFullYear());
  });
});
