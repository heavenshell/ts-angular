import { NgModule } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { LaunchListComponent } from './launch-list/launch-list.component';
import { LaunchesRoutingModule } from './launches-routing.module';
import { LaunchDatagridDetailComponent } from '../../organisms/launces/launch-datagrid-detail/launch-datagrid-detail.component';
import { LayoutModule } from '../../templates/layout/layout.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [LaunchListComponent, LaunchDatagridDetailComponent],
  imports: [
    YouTubePlayerModule,
    LaunchesRoutingModule,
    LayoutModule,
    SharedModule,
  ],
})
export class LaunchesModule {}
