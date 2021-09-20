import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcenteRoutingModule } from './acente-routing.module';
import { AcenteComponent } from './acente.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { IconsProviderModule } from '../icons-provider.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';


registerLocaleData(en);

@NgModule({
  declarations: [
    AcenteComponent,
   
  ],
  imports: [
    CommonModule,
    AcenteRoutingModule,
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
  bootstrap: [AcenteComponent]
})
export class AcenteModule { }
