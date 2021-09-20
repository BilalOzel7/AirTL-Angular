import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SurucuComponent } from '../components/surucu/surucu.component';
import { SurucuAddComponent } from '../components/surucu-add/surucu-add.component';

import { NzIconModule } from 'ng-zorro-antd/icon';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTableModule } from 'ng-zorro-antd/table';

import { IconsProviderModule } from '../icons-provider.module';

import { AcentesAddComponent } from '../components/acentes-add/acentes-add.component';
import { AcentesComponent } from '../components/acentes/acentes.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { RezervasyonComponent } from '../components/rezervasyon/rezervasyon.component';
import { RezervasyonAddComponent } from '../components/rezervasyon-add/rezervasyon-add.component';
import { RezervasyonTrueComponent } from '../components/rezervasyon-true/rezervasyon-true.component';
import { RezervasyonFalseComponent } from '../components/rezervasyon-false/rezervasyon-false.component';
import { TransferComponent } from '../components/transfer/transfer.component';
import { TransferAddComponent } from '../components/transfer-add/transfer-add.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AdminComponent,
    SurucuComponent,
    SurucuAddComponent,
    AcentesComponent,
    AcentesAddComponent,
    RezervasyonComponent,
    RezervasyonAddComponent,
    RezervasyonTrueComponent,
    RezervasyonFalseComponent,
    TransferComponent,
    TransferAddComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NzLayoutModule,
    NzIconModule,
    NzMenuModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    NzGridModule,
    FormsModule,
    ReactiveFormsModule,
    NzTableModule,
    NzDividerModule,
    IconsProviderModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
