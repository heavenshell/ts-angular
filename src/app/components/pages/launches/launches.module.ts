import { NgModule } from '@angular/core';

import { LaunchListComponent } from './launch-list/launch-list.component';
import { LaunchesRoutingModule } from './launches-routing.module';
import { LayoutModule } from '../../templates/layout/layout.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [LaunchListComponent],
  imports: [LaunchesRoutingModule, LayoutModule, SharedModule],
})
export class LaunchesModule {}
