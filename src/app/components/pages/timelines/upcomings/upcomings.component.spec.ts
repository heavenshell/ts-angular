import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UpcomingsComponent } from './upcomings.component';
import { DefaultService } from 'src/apis/spacex';
import { TabsComponent } from '../../../molecules/tabs/tabs.component';
import { TimelineComponent } from '../../../organisms/timeline/timeline.component';

describe('UpcomingsComponent', () => {
  let component: UpcomingsComponent;
  let fixture: ComponentFixture<UpcomingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      declarations: [UpcomingsComponent, TabsComponent, TimelineComponent],
      providers: [DefaultService],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
