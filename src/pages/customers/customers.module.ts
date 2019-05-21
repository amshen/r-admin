import { NgModule } from '@angular/core';


import { ThemeModule } from '../../app/@theme/theme.module';
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
