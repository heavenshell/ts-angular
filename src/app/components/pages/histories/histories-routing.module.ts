import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HistoryListComponent } from './history-list/history-list.component';
import { HistoryDetailComponent } from './history-detail/history-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HistoryListComponent,
    data: {},
  },
  {
    path: ':id',
    component: HistoryDetailComponent,
    data: {},
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoriesRoutingModule {}
