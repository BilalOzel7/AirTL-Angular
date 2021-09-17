import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcenteAddComponent } from './pages/acente/acente-add/acente-add.component';
import { AcenteComponent } from './pages/acente/acente.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  {path:"acente",component:AcenteComponent},
  {path:"acente-add",component:AcenteAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
