import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverDirective } from './hover.directive';

@NgModule({
  declarations: [HoverDirective],
  exports: [HoverDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
