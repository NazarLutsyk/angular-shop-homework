import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormInfoComponent} from './components/form-info/form-info.component';


@NgModule({
  declarations: [FormInfoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FormInfoComponent
  ]
})
export class DialogModule {
}
