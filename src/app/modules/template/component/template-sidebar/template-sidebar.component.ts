import { Component, OnInit } from '@angular/core';
import {faHouse,faBasketShopping,faCartShopping,faShop,faRightFromBracket,
        faSocks,faStore,faColumns,faPerson, faLightbulb} 
from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-template-sidebar',
  templateUrl: './template-sidebar.component.html',
  styleUrls: ['./template-sidebar.component.scss']
})
export class TemplateSidebarComponent implements OnInit {
  ngOnInit(): void {
    this.RellenarMenu();
  }
  menu: any[] = [];
  icon = {
    //*Icon de Mantenimiento Compra

    //*Icon de Mantenimiento Produccion

    //*Icon de Mantenimiento Venta
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

  RellenarMenu()
  {
    let rolname = "Administrador";
    switch(rolname)
    {
      case "Administrador":
        this.menu = 
        [
          {
            name: "Mantenimiento",
            target: "TargetManteinimiento",
            icon : this.icon.faColumns,
            submenu: 
            [
              {
                name: "Material",
                url: "mantenimiento/material",
                icon: this.icon.faStore
              },
              {
                name: "Proveedor",
                url: "mantenimiento/proveedor",
                icon:this.icon.faPerson
              },
              {
                name: "Unidad",
                url: "mantenimiento/unidad",
                icon: this.icon.faLightbulb
              }
            ]
          },
          {
            name: "Produccion",
            target: "TargetProduccion",
            icon : "fa",
            submenu:
            [
              {
                name: "Area",
                url: "",
                icon: this.icon.faLightbulb
              }
            ]
          },
          {
            name: "Venta",
            target: "TargetVenta",
            icon : "fa",
            submenu:
            [
              {
                name: "Cliente",
                url: "",
                icon: ""
              }
            ]
          }
        ]
        break;
      case "Almacenero":
        this.menu =
        [
          {
            name: "Mantenimiento",
            target: "TargetManteinimiento",
            icon : this.icon.faColumns,
            submenu:[
                {
                  name: "Material",
                  url: "mantenimiento/material",
                  icon: this.icon.faStore
                },
                {
                  name: "Proveedor",
                  url: "mantenimiento/proveedor",
                  icon:this.icon.faPerson
                },
                {
                  name: "Unidad",
                  url: "mantenimiento/unidad",
                  icon: this.icon.faLightbulb
                }
              ]
          }
        ]
        break;
    }
  }
}
