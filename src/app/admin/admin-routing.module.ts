import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcentesAddComponent } from '../components/acentes-add/acentes-add.component';
import { AcentesComponent } from '../components/acentes/acentes.component';
import { SurucuAddComponent } from '../components/surucu-add/surucu-add.component';
import { SurucuComponent } from '../components/surucu/surucu.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [{ path: '', component: AdminComponent ,children:[
  {
   path:'acentes-add' , component:AcentesAddComponent
  },
  {
    path:'acentes' , component:AcentesComponent
   },
   {
    path:'surucu-add' , component:SurucuAddComponent
   },
   {
     path:'surucu' , component:SurucuComponent
    }
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
