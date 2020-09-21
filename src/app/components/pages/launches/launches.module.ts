import { NgModule } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { LaunchListComponent } from './launch-list/launch-list.component';
import { LaunchDetailComponent } from './launch-detail/launch-detail.component';
import { LaunchesRoutingModule } from './launches-routing.module';
import { LaunchDatagridDetailComponent } from '../../organisms/launches/launch-datagrid-detail/launch-datagrid-detail.component';
import { LaunchDetailComponent as LaunchOrganismsDetailComponent } from '../../organisms/launches/launch-detail/launch-detail.component';
import { LayoutModule } from '../../templates/layout/layout.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    LaunchListComponent,
    LaunchDetailComponent,
    LaunchDatagridDetailComponent,
    LaunchOrganismsDetailComponent,
  ],
  imports: [
    YouTubePlayerModule,
    LaunchesRoutingModule,
    LayoutModule,
    SharedModule,
  ],
})
export class LaunchesModule {}
