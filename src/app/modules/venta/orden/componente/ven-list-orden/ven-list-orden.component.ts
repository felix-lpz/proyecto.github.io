import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { OrdenService } from '../../service/orden.service';
import { ResponseListOrden } from 'src/app/models/Response/Venta/TB_Orden/Response-List-Orden';
import { ResponseVWOrden } from 'src/app/models/Response/Venta/TB_Orden/Response-VW-Orden';
import { ResponseVwMaterial } from 'src/app/models/Response/Compra/Material/Response-Vw-Material';
import { AccionMantConst } from 'src/app/constants/general_constant';
import { forkJoin } from 'rxjs';
import { ResponseVWCliente } from 'src/app/models/Response/Venta/Response-VW-Cliente';
import { ClienteService } from '../../../cliente/service/cliente.service';

@Component({
  selector: 'app-ven-list-orden',
  templateUrl: './ven-list-orden.component.html',
  styleUrls: ['./ven-list-orden.component.scss']
})
export class VenListOrdenComponent implements OnInit {
  //* Variables locales
  config = {
    backdrop: true,
    ignoreBackdropClick: true    
  }
  bsModaslRef?: BsModalRef;
  acctionModal: number = 0;
  titleModal: string = "";
  responseListOrden: ResponseListOrden = new ResponseListOrden();
  responseVWOrden: ResponseVWOrden = new ResponseVWOrden();
  resVWOrden: ResponseVWOrden [] = [];
  resCliente: ResponseVWCliente [] = [];
  
  //* Ciclo de componente
  ngOnInit(): void {
    this.ListarOrden();
    this.ListarData();
  }
  //* Constructor
  constructor(private bsModalService: BsModalService,
              private ordenService: OrdenService,
              private clienteService: ClienteService){}
  
  //* Métodos Crud
  ListarOrden(){
    this.ordenService.GetAll().subscribe({
      next: (data: ResponseVWOrden [])=>{
        this.resVWOrden = data;
      },
      error: (error)=>{alert(error.message)},
      complete: ()=>{}
    });
  }
  ListarData()
  {
    forkJoin([this.clienteService.GetAll()]).subscribe({
      next: (data: any)=>{
        this.resCliente = data[0];
      },
      error: (error)=>{alert(error.message)},
      complete: ()=>{}
    });
  }
  CrearOrden(template: TemplateRef<any>){
    this.acctionModal = AccionMantConst.crear;
    this.titleModal = "Crear nueva orden";
    this.responseVWOrden = new ResponseVWOrden();
    this.responseListOrden = new ResponseListOrden();
    this.OpenModal(template);
  }
  EditarOrden(template: TemplateRef<any>,orden: ResponseListOrden){
    this.acctionModal = AccionMantConst.editar;
    this.titleModal = "Actualizar una orden";
    this.responseListOrden = orden;
    this.OpenModal(template);
  }
  //* Métodos Modal
  OpenModal(template: TemplateRef<any>){
    this.bsModaslRef = this.bsModalService.show(template,
      Object.assign({},{class:"gray modal-md"},this.config));
  }
  GetCloseModalEmitt(res: boolean){
    this.bsModaslRef?.hide();
    if(res){
      this.ListarOrden();
    }
  }
}
