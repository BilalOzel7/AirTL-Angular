import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { WebComponent } from './web.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';


@NgModule({
  declarations: [
    WebComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    NzLayoutModule,
    NzBreadCrumbModule
  ]
})
export class WebModule { }
