import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { CategoriesComponent } from './components/pages/categories/categories.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent },
  {
    path: 'launches',
    loadChildren: () =>
      import('./components/pages/launches/launches.module').then(
        (mod) => mod.LaunchesModule
      ),
  },
  {
    path: 'timelines',
    loadChildren: () =>
      import('./components/pages/timelines/timelines.module').then(
        (mod) => mod.TimelinesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
