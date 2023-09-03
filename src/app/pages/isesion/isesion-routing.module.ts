import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsesionPage } from './isesion.page';

const routes: Routes = [
  {
    path: '',
    component: IsesionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IsesionPageRoutingModule {}
