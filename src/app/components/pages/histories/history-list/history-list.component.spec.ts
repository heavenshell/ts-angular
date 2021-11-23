import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DefaultService } from 'src/apis/spacex';
import { HistoryListComponent } from './history-list.component';
import { HistoryDatagridDetailComponent } from '../../../organisms/histories/history-datagrid-detail/history-datagrid-detail.component';
import { HistoryDetailComponent } from '../../../organisms/histories/history-detail/history-detail.component';

describe('HistoryListComponent', () => {
  let component: HistoryListComponent;
  let fixture: ComponentFixture<HistoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      declarations: [
        HistoryDetailComponent,
        HistoryDatagridDetailComponent,
        HistoryListComponent,
      ],
      providers: [DefaultService],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
