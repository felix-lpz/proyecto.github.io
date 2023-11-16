import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TrasporteService } from '../../service/trasporte.service';
import { ResponseVWTrasporte } from 'src/app/models/Response/Venta/TB_Trasporte/Response-VW-Trasporte';
import { ResponseListTrasporte } from 'src/app/models/Response/Venta/TB_Trasporte/Response-List-Trasporte';
import { AccionMantConst } from 'src/app/constants/general_constant';

@Component({
  selector: 'app-ven-list-trasporte',
  templateUrl: './ven-list-trasporte.component.html',
  styleUrls: ['./ven-list-trasporte.component.scss']
})
export class VenListTrasporteComponent implements OnInit {
  //* Variables Locales
  config = {
    backdrop: true,
    ignoreBackdropClick: true
  }
  bsModalRef?: BsModalRef;
  titleModal: string = "";
  actionModal: number = 0;
  responseVWTrasporte: ResponseVWTrasporte [] = [];
  resTrasporte: ResponseVWTrasporte = new ResponseVWTrasporte();
  listTrasporte: ResponseListTrasporte = new ResponseListTrasporte();

  //* Constructor
  constructor(private bsModdalService: BsModalService,private trasporteService: TrasporteService){}

  //* Método ciclo de vida componente
  ngOnInit(): void {
    this.ListarTrasporte();
  }
  //* Metodos Crud
  ListarTrasporte(){
    this.trasporteService.GetAll().subscribe({
      next: (data: ResponseVWTrasporte []) => {
        this.responseVWTrasporte = data;
      },
      error: (error) => { alert(error) },
      complete: () => {}
    });
  }
  CreateTrasporte(template: TemplateRef<any>){
    this.titleModal = "Crear un trasporte";
    this.actionModal = AccionMantConst.crear;
    this.resTrasporte = new ResponseVWTrasporte();
    this.listTrasporte = new ResponseListTrasporte();
    this.OpenModal(template);
  }
  EditarTrasporte(template: TemplateRef<any>, trasporte: ResponseListTrasporte){
    this.titleModal = "Editar trasporte";
    this.actionModal = AccionMantConst.editar;
    this.listTrasporte = trasporte;
    this.OpenModal(template);
  }
  //*Métodos Modal
  OpenModal(template: TemplateRef<any>){
    this.bsModalRef = this.bsModdalService.show(template,
      Object.assign({},{class:"gray modal-md"},this.config))
  }
  GetCloseModalEmmit(res: boolean){
    this.bsModalRef?.hide();
    if(res)
    {
      this.ListarTrasporte();
    }
  }
}
