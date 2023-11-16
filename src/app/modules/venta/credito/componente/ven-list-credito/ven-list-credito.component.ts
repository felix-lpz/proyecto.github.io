import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ResponseVWCredito } from 'src/app/models/Response/Venta/TB_Credito/Response-VW-Credito';
import { CreditoService } from '../../service/credito.service';
import { ResponseListCredito } from 'src/app/models/Response/Venta/TB_Credito/Response-List-Credito';
import { AccionMantConst } from 'src/app/constants/general_constant';
import { forkJoin } from 'rxjs';
import { ClienteService } from '../../../cliente/service/cliente.service';
import { ResponseVWCliente } from 'src/app/models/Response/Venta/Response-VW-Cliente';

@Component({
  selector: 'app-ven-list-credito',
  templateUrl: './ven-list-credito.component.html',
  styleUrls: ['./ven-list-credito.component.scss']
})
export class VenListCreditoComponent implements OnInit{
  config = {
    backdrop: true,
    ignoreBackdropClick: true
  }
  //* Variables Locales
  titleModal: string = "";
  acctionModal: number = 0;
  bsModalRef?: BsModalRef;
  responseVWCredito: ResponseVWCredito [] = [];
  responseListCredio: ResponseListCredito = new ResponseListCredito();
  resVWCredito: ResponseVWCredito = new ResponseVWCredito();
  resVWCliente: ResponseVWCliente [] = [];
  //*Constructor
  constructor(private bsModalService: BsModalService,
              private creditoService: CreditoService,
              private clienteService: ClienteService){}
  //* Ciclo de vidad componente
  ngOnInit(): void {
    this.ListarCredito();
    this.ListarData();
  }

  //* Método CRUD
  ListarCredito(){
    this.creditoService.GetAll().subscribe({
      next: (data: ResponseVWCredito [])=>{
        this.responseVWCredito = data;
      },
      error: ()=>{},
      complete: ()=>{}
    });
  }
  CrearCredito(template: TemplateRef<any>){
    this.acctionModal = AccionMantConst.crear;
    this.titleModal = "Crear un nuevo Credito";
    this.resVWCredito = new ResponseVWCredito();
    this.OpenModal(template);
  }
  EditarCredito(template: TemplateRef<any>, credito: ResponseListCredito){
    debugger;
    this.acctionModal = AccionMantConst.editar;
    this.titleModal = "Actualizar un Credito";
    this.responseListCredio = credito;
    this.OpenModal(template);
  }
  ListarData(){
    forkJoin([
      this.clienteService.GetAll()
    ]).subscribe({
      next: (data: any)=>{
        this.resVWCliente = data[0];
      },
      error: ()=>{},
      complete: ()=>{}
    });
  }
  //* Método modal
  OpenModal(template: TemplateRef<any>){
    this.bsModalRef = this.bsModalService.show(template,
      Object.assign({},{class:"gray modal-md"},this.config));
  }
  GetCloseModalEmmit(res:boolean){
    this.bsModalRef?.hide();
    if(res){
      this.ListarCredito();
    }
  }
}
