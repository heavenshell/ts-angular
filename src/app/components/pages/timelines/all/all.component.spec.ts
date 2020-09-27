import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AllComponent } from './all.component';
import { DefaultService } from 'src/apis/spacex';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutModule } from '../../../templates/layout/layout.module';
import { TabsComponent } from '../../../molecules/tabs/tabs.component';
import { TimelineComponent } from '../../../organisms/timeline/timeline.component';

describe('AllComponent', () => {
  let component: AllComponent;
  let fixture: ComponentFixture<AllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        SharedModule,
        LayoutModule,
      ],
      declarations: [AllComponent, TabsComponent, TimelineComponent],
      providers: [DefaultService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
