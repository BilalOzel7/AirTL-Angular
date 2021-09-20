import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurucuDestekComponent } from '../components/surucu-destek/surucu-destek.component';
import { SurucudestekAddComponent } from '../components/surucudestek-add/surucudestek-add.component';
import { SuruculerComponent } from './suruculer.component';

const routes: Routes = [{ path: '', component: SuruculerComponent ,children:[
  {
    path:'surucu-destek' , component:SurucuDestekComponent
   },
   {
     path:'surucudestek-add' , component:SurucudestekAddComponent
    },
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuruculerRoutingModule { }
