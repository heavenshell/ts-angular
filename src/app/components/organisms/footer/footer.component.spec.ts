import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GithubComponent } from '../../atoms/github/github.component';
import { TwitterComponent } from '../../atoms/twitter/twitter.component';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [],
        declarations: [GithubComponent, TwitterComponent, FooterComponent],
        schemas: [NO_ERRORS_SCHEMA],
      }).compileComponents();
    })
  );

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
