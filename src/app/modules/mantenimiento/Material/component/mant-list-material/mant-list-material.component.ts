import { Component, OnInit, TemplateRef } from '@angular/core';
import{ BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MaterialService } from "../../service/material.service";
import { ResponseMaterial } from 'src/app/models/Response/Compra/Response-Material';
import { AccionMantConst } from 'src/app/constants/general_constant';

@Component({
  selector: 'app-mant-list-material',
  templateUrl: './mant-list-material.component.html',
  styleUrls: ['./mant-list-material.component.scss']
})
export class MantListMaterialComponent implements OnInit {
  //*Declaracion de variables
  titleModal:string = "";
  material: ResponseMaterial[] = [];
  meterialSelect: ResponseMaterial = new ResponseMaterial();
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
    debugger;
    this.materilService.GetAll().subscribe({
      next: (data:ResponseMaterial[])=>{
        this.material = data;
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
    this.meterialSelect = new ResponseMaterial();
    this.titleModal = "Registre el material";
    this.actionModal = AccionMantConst.crear;
    this.OpenModal(template);
  }
  EditarMaterial(template: TemplateRef<any>, material:ResponseMaterial)
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
