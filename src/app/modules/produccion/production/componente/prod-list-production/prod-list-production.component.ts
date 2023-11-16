import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProductionService } from '../../service/production.service';
import { ResponseVWProduccion } from 'src/app/models/Response/Produccion/TB_Production/Response-VW-Production';
import { ResponseListProduccion } from 'src/app/models/Response/Produccion/TB_Production/Response-List-Production';
import { AccionMantConst } from 'src/app/constants/general_constant';
import { forkJoin } from 'rxjs';
import { UnidadService } from 'src/app/modules/mantenimiento/Unidad/service/unidad.service';
import { ResponseUnidad } from 'src/app/models/Response/Produccion/Response_Unidad';

@Component({
  selector: 'app-prod-list-production',
  templateUrl: './prod-list-production.component.html',
  styleUrls: ['./prod-list-production.component.scss']
})
export class ProdListProductionComponent implements OnInit {
  //* Variables de locales
  config = {
    backdrop: true,
    ignoreBackdropClick: true
  }
  bsModalRef?: BsModalRef;
  titleModal: string = "";
  acttionModal: number = 0;
  responseVwProduction: ResponseVWProduccion [] = [];
  resVWProduction: ResponseVWProduccion = new ResponseVWProduccion();
  resListaProduction: ResponseListProduccion = new ResponseListProduccion();
  resUnidad: ResponseUnidad [] = [];
  //* Componente de vida
  ngOnInit(): void {
    this.ListarProduction();
    this.ListarData();
  }
  //* Construct
  constructor(private bsModalService: BsModalService,
              private productionService: ProductionService,
              private unidadService: UnidadService){}
  //* Método crud
  ListarProduction(){
    this.productionService.GetAll().subscribe({
      next: (data: ResponseVWProduccion [])=>{
        this.responseVwProduction = data;
      },
      error: (error)=>{ alert(error.message)},
      complete: ()=>{}
    });
  }
  ListarData()
  {
    forkJoin([
      this.unidadService.GetAll()
    ]).subscribe({
      next: (data: any)=>{
        this.resUnidad = data[0]
      },
      error: (error)=>{ alert(error.message)},
      complete: ()=>{}
    });
  }
  CrearProduction(template: TemplateRef<any>){
    this.resListaProduction = new ResponseListProduccion();
    this.titleModal = "Crear una nueva produccion";
    this.acttionModal = AccionMantConst.crear;
    this.OpenModa(template)
  }
  EditarProducciton(template: TemplateRef<any>, production: ResponseListProduccion){
    this.resListaProduction = production;
    this.titleModal = "Actualizar una produccion";
    this.acttionModal = AccionMantConst.editar;
    this.OpenModa(template)
  }
  //* Método modal
  OpenModa(template: TemplateRef<any>){
    this.bsModalRef = this.bsModalService.show(template,
      Object.assign({},{class:"gray modal-md"},this.config));
  }
  GetCloseModalEmitter(res: boolean){
    this.bsModalRef?.hide();
    if(res){
      this.ListarProduction();
    }
  }
}
