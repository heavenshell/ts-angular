import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { CategoriesComponent } from './components/pages/categories/categories.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
