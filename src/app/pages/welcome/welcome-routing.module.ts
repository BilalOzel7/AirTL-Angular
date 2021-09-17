import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcenteComponent } from '../acente/acente.component';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'acente', component: AcenteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
