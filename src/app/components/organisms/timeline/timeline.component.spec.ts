import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TimelineComponent } from './timeline.component';
import { TabsComponent } from '../../molecules/tabs/tabs.component';
import { LayoutModule } from '../../templates/layout/layout.module';
import { AllComponent } from '../../pages/timelines/all/all.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('TimelineComponent', () => {
  let component: TimelineComponent;
  let fixture: ComponentFixture<TimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule, LayoutModule],
      declarations: [TimelineComponent, TabsComponent, AllComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
