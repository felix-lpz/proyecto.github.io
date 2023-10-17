import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { TemplaraComponent } from './component/templara/templara.component';
import { TemplateHeaderComponent } from './component/template-header/template-header.component';
import { TemplateSidebarComponent } from './component/template-sidebar/template-sidebar.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { TemplateFooterComponent } from './component/template-footer/template-footer.component';

@NgModule({
  declarations: [
    TemplaraComponent,
    TemplateHeaderComponent,
    TemplateSidebarComponent,
    TemplateFooterComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    FontAwesomeModule
  ]
})
export class TemplateModule { }
