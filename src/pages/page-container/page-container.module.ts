import { NgModule } from '@angular/core';

import { PageContainerComponent } from './page-container.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { PagesRoutingModule } from '../pages-routing.module';
import { ThemeModule } from '../../app/@theme/theme.module';
import { MiscellaneousModule } from '../miscellaneous/miscellaneous.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    MiscellaneousModule,
  ],
  exports: [
  ],
  declarations: [
    PageContainerComponent,
  ],
})
export class PagesModule {
}
