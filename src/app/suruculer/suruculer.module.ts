import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuruculerRoutingModule } from './suruculer-routing.module';
import { SuruculerComponent } from './suruculer.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';


import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { IconsProviderModule } from '../icons-provider.module';
import { SurucuDestekComponent } from '../components/surucu-destek/surucu-destek.component';
import { SurucudestekAddComponent } from '../components/surucudestek-add/surucudestek-add.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

registerLocaleData(en);
@NgModule({
  declarations: [
    SuruculerComponent,
    SurucuDestekComponent,
    SurucudestekAddComponent
  ],
  imports: [
    CommonModule,
    SuruculerRoutingModule,
    IconsProviderModule,
    ReactiveFormsModule,
    NzLayoutModule,
    NzMenuModule,
    NzDividerModule,
    NzIconModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    NzGridModule,
    NzTableModule,
    FormsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [SuruculerComponent]
})
export class SuruculerModule { }
