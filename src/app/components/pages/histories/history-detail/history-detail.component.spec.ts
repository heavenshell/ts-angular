import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { DefaultService } from 'src/apis/spacex';
import { HistoryDetailComponent } from './history-detail.component';
import { HistoryDetailComponent as HistoryOrganismsDetailComponent } from '../../../organisms/histories/history-detail/history-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutModule } from '../../../templates/layout/layout.module';

describe('HistoryDetailComponent', () => {
  let component: HistoryDetailComponent;
  let fixture: ComponentFixture<HistoryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        SharedModule,
        LayoutModule,
      ],
      declarations: [HistoryDetailComponent, HistoryOrganismsDetailComponent],
      providers: [
        DefaultService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ id: 94 }),
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
