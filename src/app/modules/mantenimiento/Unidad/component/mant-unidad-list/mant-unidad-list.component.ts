import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UnidadService } from '../../service/unidad.service';
import { ResponseUnidad } from 'src/app/models/Response/Produccion/Response_Unidad';
import { AccionMantConst } from 'src/app/constants/general_constant';

@Component({
  selector: 'app-mant-unidad-list',
  templateUrl: './mant-unidad-list.component.html',
  styleUrls: ['./mant-unidad-list.component.scss']
})
export class MantUnidadListComponent implements OnInit {
  modalRef?: BsModalRef;
  titleModal:string = "";
  actionModal:number = 0;
  unidad: ResponseUnidad[] = [];
  unidadSelected: ResponseUnidad = new ResponseUnidad();

  constructor(private modaService:BsModalService,
              private unidadService:UnidadService){}

  ngOnInit(): void {
    this.listaUnidad();
  }

  listaUnidad()
  {
    this.unidadService.GetAll().subscribe({
      next:(data:ResponseUnidad[])=>
      {
        this.unidad = data;
        console.log(this.unidad);
      },
      error:(errr)=>
      {
        console.log(errr)
      },
      complete:()=>{}
    });
  }
  
  CrearUnidad(template:TemplateRef<any>)
  {
    this.unidadSelected = new ResponseUnidad();
    this.titleModal = "Nueva Unidad";
    this.actionModal = AccionMantConst.crear;
    this.OpenModal(template);
  }

  EditarUnidad(template:TemplateRef<any>,unidad:ResponseUnidad)
  {
    this.unidadSelected = unidad;
    this.titleModal = "Editar Unida";
    this.actionModal = AccionMantConst.editar;
    this.OpenModal(template);
  }

  OpenModal(template:TemplateRef<any>)
  {
    this.modalRef = this.modaService.show(template);
  }
  GetCloseModalEmmit(res:boolean)
  {
    this.modalRef?.hide();
    if(res)
    {
      this.listaUnidad();
    }
  }
}
