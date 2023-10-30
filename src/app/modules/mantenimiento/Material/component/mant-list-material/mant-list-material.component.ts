import { Component, OnInit, TemplateRef } from '@angular/core';
import{ BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MaterialService } from "../../service/material.service";
import { ResponseMaterial } from 'src/app/models/Response/Compra/Material/Response-Material';
import { AccionMantConst } from 'src/app/constants/general_constant';
import { ResponseVwMaterial } from 'src/app/models/Response/Compra/Material/Response-Vw-Material';

@Component({
  selector: 'app-mant-list-material',
  templateUrl: './mant-list-material.component.html',
  styleUrls: ['./mant-list-material.component.scss']
})
export class MantListMaterialComponent implements OnInit {
  //*Declaracion de variables
  titleModal:string = "";
  responseMaterial: ResponseMaterial[] = [];
  material: ResponseMaterial = new ResponseMaterial();
  responseVwMaterial:ResponseVwMaterial =new ResponseVwMaterial();
  meterialSelect: ResponseVwMaterial = new ResponseVwMaterial();
  actionModal:number = 0;

  //*Declaraciones de variables del modal
  modalRef?: BsModalRef;
  

  //*Inyeccion de dependencias
  constructor(private materilService:MaterialService,
              private modalService: BsModalService){}

  //*Inicio de carga del componente
  ngOnInit(): void {
    this.ListaMaterial();
  }

  //*Metodos de Material
  ListaMaterial()
  {
    this.materilService.MostrarMaterial().subscribe({
      next: (data:ResponseMaterial[])=>{
        this.responseMaterial = data;
        console.log(this.responseMaterial);
      },
      error:(errr)=>
      {
        console.log(errr)
      },
      complete:()=>{}
      
    });
  }
  CrearMaterial(template: TemplateRef<any>)
  {
    this.meterialSelect = new ResponseVwMaterial();
    this.titleModal = "Registre el material";
    this.actionModal = AccionMantConst.crear;
    this.OpenModal(template);
  }
  EditarMaterial(template: TemplateRef<any>, material:ResponseVwMaterial)
  {
    this.meterialSelect = material;
    this.titleModal = "Actualiza el material";
    this.actionModal = AccionMantConst.editar;
    this.OpenModal(template);
  }
  //*Métodos del modal
  OpenModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }
  GetCloseModalEmmit(res:boolean){
    this.modalRef?.hide();
    if(res)
    {
      this.ListaMaterial();
    }
  }
}
