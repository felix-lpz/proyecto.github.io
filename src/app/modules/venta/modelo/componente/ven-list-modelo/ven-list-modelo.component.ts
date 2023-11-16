import { Component, OnInit, TemplateRef } from '@angular/core';
import { ModeloService } from '../../service/modelo.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ResponseModelo } from 'src/app/models/Response/Venta/TB_Modelo/Response-Modelo';
import { AccionMantConst } from 'src/app/constants/general_constant';

@Component({
  selector: 'app-ven-list-modelo',
  templateUrl: './ven-list-modelo.component.html',
  styleUrls: ['./ven-list-modelo.component.scss']
})
export class VenListModeloComponent implements OnInit{
  config = {
    backdrop: true,
    ignoreBackdropClick: true
  }
  //* Variable local
  responseModelo: ResponseModelo [] = [];
  resModelo: ResponseModelo = new ResponseModelo();
  titleModal: string = "";
  acttionModal: number = 0;
  bsModalRef?: BsModalRef;
  //* Construct 
  constructor(private modeloService: ModeloService,
              private bsModalService: BsModalService){}
  //* Componente de vida
  ngOnInit(): void {
    this.ListarModelo();
  }

  //* Metodo Crud
  ListarModelo(){
    this.modeloService.GetAll().subscribe({
      next: (data: ResponseModelo [])=>{
        this.responseModelo = data;
      },
      error: (error)=>{ alert(error.mesage)},
      complete: ()=>{}
    });
  }
  CrearModelo(template: TemplateRef<any>){
    this.titleModal = "Crear Modelo";
    this.acttionModal = AccionMantConst.crear;
    this.resModelo = new ResponseModelo();
    this.OpenModal(template);
  }
  EditarModelo(template: TemplateRef<any>, modelo: ResponseModelo){
    this.titleModal = "Editar Modelos";
    this.acttionModal = AccionMantConst.editar;
    this.resModelo = modelo;
    this.OpenModal(template);
  }

  //* Método Modal
  OpenModal(template: TemplateRef<any>){
    this.bsModalRef = this.bsModalService.show(template,
      Object.assign({},{class:"gray modal-md"},this.config));
  }
  GetCloseModalEmitter(res: boolean){
    this.bsModalRef?.hide();
    if(res){
      this.ListarModelo();
    }
  }
}
