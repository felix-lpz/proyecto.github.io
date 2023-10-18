import { Component, OnInit, TemplateRef } from '@angular/core';
import {BsModalRef,BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-mant-proveedor-list',
  templateUrl: './mant-proveedor-list.component.html',
  styleUrls: ['./mant-proveedor-list.component.scss']
})
export class MantProveedorListComponent implements OnInit {
  modalRef?: BsModalRef;
  ngOnInit(): void {
    console.log("mensaje");
  }
  // constructor(private modalService:BsModalService){
  // }
  
  // OpenModal(template:TemplateRef<any>)
  // {
  //   this.modalRef = this.modalService.show(template);
  // }
  
}
