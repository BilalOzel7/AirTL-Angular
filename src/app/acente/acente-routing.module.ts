import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcenteComponent } from './acente.component';

const routes: Routes = [{ path: '', component: AcenteComponent ,children:[
 
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcenteRoutingModule { }
