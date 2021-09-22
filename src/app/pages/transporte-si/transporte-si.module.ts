import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransporteSiPageRoutingModule } from './transporte-si-routing.module';

import { TransporteSiPage } from './transporte-si.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransporteSiPageRoutingModule
  ],
  declarations: [TransporteSiPage]
})
export class TransporteSiPageModule {}
