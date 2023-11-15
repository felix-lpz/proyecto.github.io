import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ResponseListCliente } from 'src/app/models/Response/Venta/Response-List-Cliente';
import { ClienteService } from '../../service/cliente.service';
import { ResponseVwMaterial } from 'src/app/models/Response/Compra/Material/Response-Vw-Material';
import { ResponseVWCliente } from 'src/app/models/Response/Venta/Response-VW-Cliente';
import { RequestVWCliente } from 'src/app/modules/models/Ventas/Request-VW-Cliente';
import { AccionMantConst } from 'src/app/constants/general_constant';

@Component({
  selector: 'app-ven-list-cliente',
  templateUrl: './ven-list-cliente.component.html',
  styleUrls: ['./ven-list-cliente.component.scss']
})
export class VenListClienteComponent implements OnInit{
  config = {
    backdrop: true,
    ignoreBackdropClick: true
  }
  //* Declaracion de variables
  modalRef?:BsModalRef;
  responseListCliente: ResponseListCliente[] = [];
  titleModal: string = "";
  responseVwCliente: ResponseVWCliente[] = [];
  responseVwC: ResponseVWCliente = new ResponseVWCliente();
  responseListC: ResponseListCliente = new ResponseListCliente();
  accionModal: number = 0;

  constructor(private modalService:BsModalService,private serviceCliente:ClienteService){}
  ngOnInit(): void {
    this.ListarClientes();
  }

  //*Métodos
  ListarClientes(){
    this.serviceCliente.GetAll().subscribe({
      next:(data:ResponseVWCliente[])=>{
        this.responseVwCliente = data;
      },
      error:()=>{},
      complete:()=>{}
    })
  }

  CrearCliente(template: TemplateRef<any>){
    this.responseListC = new ResponseListCliente();
    this.titleModal = "Crear el Cliente";
    this.accionModal= AccionMantConst.crear;
    this.OpenModal(template);
  }
  EditarCliente(template: TemplateRef<any>, cliente: ResponseListCliente)
  {
    this.responseListC = cliente;
    this.titleModal = "Actualiza el Cliente";
    this.accionModal= AccionMantConst.editar;
    this.OpenModal(template);
  }
  OpenModal(template:TemplateRef<any>)
   {
     this.modalRef = this.modalService.show(template,
      Object.assign({},{class:"gray modal-md"},this.config));
   }
   getCloseModalEmmit(res:boolean)
   {
     this.modalRef?.hide();
     if(res)
     {
       this.ListarClientes();
     }
 
   }

}
