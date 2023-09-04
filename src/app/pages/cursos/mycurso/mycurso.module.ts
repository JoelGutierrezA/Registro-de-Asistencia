import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MycursoPageRoutingModule } from './mycurso-routing.module';

import { MycursoPage } from './mycurso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MycursoPageRoutingModule
  ],
  declarations: [MycursoPage]
})
export class MycursoPageModule {}
