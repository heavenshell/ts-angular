import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LaunchListComponent } from './launch-list/launch-list.component';
import { LaunchDetailComponent } from './launch-detail/launch-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LaunchListComponent,
    data: {},
  },
  {
    path: ':id',
    component: LaunchDetailComponent,
    data: {},
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaunchesRoutingModule {}
