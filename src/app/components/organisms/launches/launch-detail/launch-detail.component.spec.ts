import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { LaunchDetailComponent } from '../../../pages/launches/launch-detail/launch-detail.component';
import { LaunchDetailComponent as LaunchOrganismsDetailComponent } from './launch-detail.component';

describe('LaunchDatagridDetailComponent', () => {
  let component: LaunchOrganismsDetailComponent;
  let fixture: ComponentFixture<LaunchOrganismsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaunchDetailComponent, LaunchOrganismsDetailComponent],
      imports: [YouTubePlayerModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchOrganismsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
