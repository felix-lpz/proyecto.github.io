import { Component } from '@angular/core';
import {faHouse,faBasketShopping,faCartShopping,faShop,faRightFromBracket,
        faSocks,faStore,faColumns,faPerson, faLightbulb} 
from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-template-sidebar',
  templateUrl: './template-sidebar.component.html',
  styleUrls: ['./template-sidebar.component.scss']
})
export class TemplateSidebarComponent {
  icon = {
    faHouse:faHouse,
    faBasketShopping: faBasketShopping,
    faShop: faShop,
    faStore: faStore,
    faSocks: faSocks,
    faRightFromBracket: faRightFromBracket,
    faCartShopping: faCartShopping,
    faColumns:faColumns,
    faPerson:faPerson,
    faLightbulb: faLightbulb,
  }
}
