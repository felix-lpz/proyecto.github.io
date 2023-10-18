import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import {BsModalRef,BsModalService} from 'ngx-bootstrap/modal';
import { ResponseProvedor } from 'src/app/models/Response/Compra/Response_Provedor';
import { ProveedorService } from '../../../service/proveedor.service';

@Component({
  selector: 'app-mant-proveedor-list',
  templateUrl: './mant-proveedor-list.component.html',
  styleUrls: ['./mant-proveedor-list.component.scss']
})
export class MantProveedorListComponent implements OnInit {
  modalRef?: BsModalRef;
  proveedor: ResponseProvedor[] = [];
  proveedorSelect: ResponseProvedor = new ResponseProvedor();
  titleModal:string = "";
  actionModal: number = 0;

  constructor(private modalService:BsModalService,
    private route: Router,
    private provedorService: ProveedorService)
    {
      
    }
    
  ngOnInit(): void {
    this.ListarProvedores()
  }
  
  ListarProvedores()
  {
    this.provedorService.GetAll().subscribe({
      next: (data: ResponseProvedor[]) =>
      {
        this.proveedor = data;
      },
      error:(err) =>
      {
        console.error(err);
      },
      complete: ()=>
      {

      }
    });
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
