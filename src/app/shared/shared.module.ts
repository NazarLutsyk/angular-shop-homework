import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverDirective } from './hover.directive';
import { OrderByPipe } from './order-by.pipe';

@NgModule({
  declarations: [HoverDirective, OrderByPipe],
  exports: [HoverDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
