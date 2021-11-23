import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { DefaultService } from 'src/apis/spacex';
import { LaunchListComponent } from './launch-list.component';
import { LaunchDatagridDetailComponent } from '../../../organisms/launches/launch-datagrid-detail/launch-datagrid-detail.component';
import { LaunchDetailComponent as LaunchOrganismsDetailComponent } from '../../../organisms/launches/launch-detail/launch-detail.component';

describe('LaunchListComponent', () => {
  let component: LaunchListComponent;
  let fixture: ComponentFixture<LaunchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        YouTubePlayerModule,
      ],
      declarations: [
        LaunchListComponent,
        LaunchOrganismsDetailComponent,
        LaunchDatagridDetailComponent,
      ],
      providers: [DefaultService],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
