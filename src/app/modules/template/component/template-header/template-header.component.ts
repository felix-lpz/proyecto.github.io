import { Component } from '@angular/core';
import {faBars,faSearch} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-template-header',
  templateUrl: './template-header.component.html',
  styleUrls: ['./template-header.component.scss']
})
export class TemplateHeaderComponent {
icon = {
  faBars:faBars,
  faSearch:faSearch
}
}
