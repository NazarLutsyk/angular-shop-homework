import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormInfoComponent} from './components/form-info/form-info.component';
import { ConfirmAlertComponent } from './components/confirm-alert/confirm-alert.component';
import {MatButtonModule} from '@angular/material';


@NgModule({
  declarations: [FormInfoComponent, ConfirmAlertComponent],
  entryComponents: [ConfirmAlertComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    FormInfoComponent,
    ConfirmAlertComponent
  ]
})
export class DialogModule {
}
