import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransporteNoPageRoutingModule } from './transporte-no-routing.module';

import { TransporteNoPage } from './transporte-no.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransporteNoPageRoutingModule
  ],
  declarations: [TransporteNoPage]
})
export class TransporteNoPageModule {}
