import { NgModule } from '@angular/core';

import { AllComponent } from './all/all.component';
import { TimelinesRoutingModule } from './timelines-routing.module';
import { TabsComponent } from '../../molecules/tabs/tabs.component';
import { TimelineComponent } from '../../organisms/timeline/timeline.component';
import { LayoutModule } from '../../templates/layout/layout.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UpcomingsComponent } from './upcomings/upcomings.component';
import { PastsComponent } from './pasts/pasts.component';

@NgModule({
  declarations: [
    TabsComponent,
    TimelineComponent,
    AllComponent,
    UpcomingsComponent,
    PastsComponent,
  ],
  imports: [LayoutModule, SharedModule, TimelinesRoutingModule],
})
export class TimelinesModule {}
