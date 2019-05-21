import { NgModule } from '@angular/core';


import { ThemeModule } from '../../app/@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { NbSearchModule } from '@nebular/theme';

@NgModule({
  imports: [
    ThemeModule,
    NbSearchModule,
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
