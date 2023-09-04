import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MycursoPage } from './mycurso.page';

const routes: Routes = [
  {
    path: '',
    component: MycursoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MycursoPageRoutingModule {}
