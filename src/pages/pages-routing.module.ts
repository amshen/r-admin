import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PageContainerComponent } from './page-container/page-container.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: PageContainerComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
