import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { HistoryDetailComponent } from '../../../pages/histories/history-detail/history-detail.component';
import { HistoryDetailComponent as HistoryOrganismsDetailComponent } from './history-detail.component';

describe('HistoryDetailComponent', () => {
  let component: HistoryOrganismsDetailComponent;
  let fixture: ComponentFixture<HistoryOrganismsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoryDetailComponent, HistoryOrganismsDetailComponent],
      imports: [YouTubePlayerModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryOrganismsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
