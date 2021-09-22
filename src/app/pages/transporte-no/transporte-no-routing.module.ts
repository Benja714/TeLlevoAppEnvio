import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransporteNoPage } from './transporte-no.page';

const routes: Routes = [
  {
    path: '',
    component: TransporteNoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransporteNoPageRoutingModule {}
