import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import {BsModalRef,BsModalService} from 'ngx-bootstrap/modal';
import { ResponseProvedor } from 'src/app/models/Response/Compra/Response_Provedor';
import { ProveedorService } from '../../../service/proveedor.service';
import { AccionMantConst } from 'src/app/constants/general_constant';
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import { ResponseVWProvedor } from 'src/app/models/Response/Compra/Response_VW_Provedor';

@Component({
  selector: 'app-mant-proveedor-list',
  templateUrl: './mant-proveedor-list.component.html',
  styleUrls: ['./mant-proveedor-list.component.scss']
})
export class MantProveedorListComponent implements OnInit {
  modalRef?: BsModalRef;
  proveedor: ResponseProvedor[] = [];
  vwproveedor: ResponseVWProvedor[] = [];
  proveedorSelect: ResponseVWProvedor = new ResponseVWProvedor();
  vwprovedorSelect: ResponseVWProvedor = new ResponseVWProvedor();
  titleModal:string = "";
  actionModal: number = 0;

  icon = {
    faPlus: faPlus
  }
  constructor(private modalService:BsModalService,
    private route: Router,
    private provedorService: ProveedorService)
    {
      
    }
    
  ngOnInit(): void {
    this.ListarProvedores();
  }
  
  ListarProvedores()
  {
    debugger;
    this.provedorService.GetAll().subscribe({
      next: (data:ResponseVWProvedor[]) =>
      {
        this.vwproveedor = data;
        console.log(this.vwproveedor);
      },
      error:(error) =>
      {
        console.error(error);
      },
      complete: ()=>
      {

      }
    });
  }

  CrearProveedor(template: TemplateRef<any>)
  {
    this.proveedorSelect = new ResponseVWProvedor();
    this.titleModal = "Nuevo Cargo",
    this.actionModal = AccionMantConst.crear;
    this.OpenModal(template);
  }
  EditarProveedor(template: TemplateRef<any>,provedor: ResponseVWProvedor)
  {
    this.proveedorSelect = provedor;
    this.titleModal = "Editar Cargo";
    this.actionModal = AccionMantConst.editar;
    this.OpenModal(template);
  }

   OpenModal(template:TemplateRef<any>)
   {
     this.modalRef = this.modalService.show(template);
   }
   getCloseModalEmmit(res:boolean)
   {
     this.modalRef?.hide();
     if(res)
     {
       this.ListarProvedores();
     }
 
   }
 
}
