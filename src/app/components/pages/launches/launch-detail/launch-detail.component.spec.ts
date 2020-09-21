import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { DefaultService } from 'src/apis/spacex';
import { LayoutModule } from 'src/app/components/templates/layout/layout.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { LaunchDetailComponent } from './launch-detail.component';
import { LaunchDetailComponent as LaunchOrganismsDetailComponent } from '../../../organisms/launches/launch-detail/launch-detail.component';

describe('LaunchDetailComponent', () => {
  let component: LaunchDetailComponent;
  let fixture: ComponentFixture<LaunchDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        YouTubePlayerModule,
        SharedModule,
        LayoutModule,
      ],
      declarations: [LaunchDetailComponent, LaunchOrganismsDetailComponent],
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
    fixture = TestBed.createComponent(LaunchDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
