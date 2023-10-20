import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-mant-unidad-list',
  templateUrl: './mant-unidad-list.component.html',
  styleUrls: ['./mant-unidad-list.component.scss']
})
export class MantUnidadListComponent {
  modalRef?: BsModalRef;
  titleModal:string = "";
  actionModal:number = 0;

  constructor(private modaService:BsModalService){}

  OpenModal(template:TemplateRef<any>)
  {
    this.modalRef = this.modaService.show(template);
  }
  GetCloseModalEmmit(res:boolean)
  {
    this.modalRef?.hide();
  }
}
