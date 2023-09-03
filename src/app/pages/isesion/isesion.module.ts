import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IsesionPageRoutingModule } from './isesion-routing.module';

import { IsesionPage } from './isesion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IsesionPageRoutingModule
  ],
  declarations: [IsesionPage]
})
export class IsesionPageModule {}
