import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';






const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/web' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'acente', loadChildren: () => import('./acente/acente.module').then(m => m.AcenteModule) },
  { path: 'suruculer', loadChildren: () => import('./suruculer/suruculer.module').then(m => m.SuruculerModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'web', loadChildren: () => import('./web/web.module').then(m => m.WebModule) }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
