import { NgModule } from '@angular/core';

import { HistoriesRoutingModule } from './histories-routing.module';
import { HistoryListComponent } from './history-list/history-list.component';
import { HistoryDetailComponent } from './history-detail/history-detail.component';
import { HistoryDetailComponent as HistoryOrganismsDetailComponent } from '../../organisms/histories/history-detail/history-detail.component';
import { HistoryDatagridDetailComponent } from '../../organisms/histories/history-datagrid-detail/history-datagrid-detail.component';
import { LayoutModule } from '../../templates/layout/layout.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HistoryListComponent,
    HistoryDetailComponent,
    HistoryDatagridDetailComponent,
    HistoryOrganismsDetailComponent,
  ],
  imports: [HistoriesRoutingModule, LayoutModule, SharedModule],
})
export class HistoriesModule {}
