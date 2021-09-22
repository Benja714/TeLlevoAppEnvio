import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransporteSiPage } from './transporte-si.page';

const routes: Routes = [
  {
    path: '',
    component: TransporteSiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransporteSiPageRoutingModule {}
