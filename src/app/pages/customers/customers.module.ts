import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { CustomersComponent } from './customers.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    CustomersComponent,
  ],
})
export class CustomersModule { }
