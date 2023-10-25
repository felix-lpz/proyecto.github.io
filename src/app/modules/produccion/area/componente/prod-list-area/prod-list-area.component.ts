import { Component, OnInit, TemplateRef } from '@angular/core';
import {BsModalRef,BsModalService} from 'ngx-bootstrap/modal'
import { AreaService } from '../../service/area.service';
import { AccionMantConst } from 'src/app/constants/general_constant';
import { ResponseArea } from 'src/app/models/Response/Produccion/Response-Area';
import { MessageError, MessageSucess } from 'src/app/functions/Message_Fuctions';

@Component({
  selector: 'app-prod-list-area',
  templateUrl: './prod-list-area.component.html',
  styleUrls: ['./prod-list-area.component.scss']
})
export class ProdListAreaComponent implements OnInit {
  modalRef?: BsModalRef;
  titleModal:string = "";
  actionModal: number = 0;
  listArea: ResponseArea[] = [];
  responseArea: ResponseArea = new ResponseArea();

  
  constructor (private modalService: BsModalService,
              private serviceArea: AreaService){}

  ngOnInit(): void {
    this.ListarArea();
  }

  //*Métodos del crud
  ListarArea(){
    this.serviceArea.GetAll().subscribe({
      next:(data: ResponseArea[])=>{
        this.listArea = data;
      },
      error: (err)=>{
        MessageError();
      },
      complete: () =>{}
    })
  }
  CrearArea(template: TemplateRef<any>){
    this.titleModal = "Registrar Area";
    this.responseArea = new ResponseArea();
    this.actionModal = AccionMantConst.crear;
    this.OpenModal(template);
  }
  EditarArea(template: TemplateRef<any>,list:ResponseArea){
    this.titleModal = "Editar Area";
    this.responseArea = list;
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
      this.ListarArea();
    }
  }
}
