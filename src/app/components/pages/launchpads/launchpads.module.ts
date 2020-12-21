import { NgModule } from '@angular/core';

import { LayoutModule } from '../../templates/layout/layout.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LaunchpadListComponent } from './launchpad-list/launchpad-list.component';
import { LaunchpadsRoutingModule } from './launchpads-routing.module';

@NgModule({
  declarations: [LaunchpadListComponent],
  imports: [LaunchpadsRoutingModule, LayoutModule, SharedModule],
})
export class LaunchpadsModule {}
