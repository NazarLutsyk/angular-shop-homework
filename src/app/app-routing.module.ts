import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  // todo it broke app (because of using shared material module inside)
  // {
  // path: 'admin',
  // loadChildren: './modules/admin/admin.module#AdminModule',
  // canActivate: [AuthenticatedGuard, RoleGuard]
  // }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
