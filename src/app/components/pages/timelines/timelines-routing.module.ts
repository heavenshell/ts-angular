import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllComponent } from './all/all.component';
import { PastsComponent } from './pasts/pasts.component';
import { UpcomingsComponent } from './upcomings/upcomings.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'all',
  },
  {
    path: 'all',
    component: AllComponent,
    data: {},
  },
  {
    path: 'upcomings',
    component: UpcomingsComponent,
    data: {},
  },
  {
    path: 'pasts',
    component: PastsComponent,
    data: {},
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimelinesRoutingModule {}
