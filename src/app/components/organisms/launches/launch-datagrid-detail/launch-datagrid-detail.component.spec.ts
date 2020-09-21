import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { LaunchDatagridDetailComponent } from './launch-datagrid-detail.component';

describe('LaunchDatagridDetailComponent', () => {
  let component: LaunchDatagridDetailComponent;
  let fixture: ComponentFixture<LaunchDatagridDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaunchDatagridDetailComponent],
      imports: [YouTubePlayerModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchDatagridDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
