import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcentesAddComponent } from '../components/acentes-add/acentes-add.component';
import { AcentesComponent } from '../components/acentes/acentes.component';
import { RezervasyonAddComponent } from '../components/rezervasyon-add/rezervasyon-add.component';
import { RezervasyonFalseComponent } from '../components/rezervasyon-false/rezervasyon-false.component';
import { RezervasyonTrueComponent } from '../components/rezervasyon-true/rezervasyon-true.component';
import { RezervasyonComponent } from '../components/rezervasyon/rezervasyon.component';
import { SurucuAddComponent } from '../components/surucu-add/surucu-add.component';
import { SurucuComponent } from '../components/surucu/surucu.component';
import { TransferAddComponent } from '../components/transfer-add/transfer-add.component';
import { TransferComponent } from '../components/transfer/transfer.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [{ path: '', component: AdminComponent ,children:[
  {
   path:'acentes-add' , component:AcentesAddComponent
  },
  {
    path:'getacentedetails' , component:AcentesComponent
  },
  {
    path:'surucu-add' , component:SurucuAddComponent
  },
  {
    path:'surucu' , component:SurucuComponent
  },
  {
    path:'rezervasyon' , component:RezervasyonComponent
  },
  {
    path:'rezervasyonadd' , component:RezervasyonAddComponent
  },
  {
    path:'bystatustrue' , component:RezervasyonTrueComponent
  },
  {
    path:'bystatusfalse' , component:RezervasyonFalseComponent
  },
  {
    path:'gettransferdetails' , component:TransferComponent
  },
  {
    path:'transferadd' , component:TransferAddComponent
  },
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
