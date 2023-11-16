import { Component, OnInit, TemplateRef } from '@angular/core';
import { ProductoService } from '../../service/producto.service';
import { ResponseVWProducto } from 'src/app/models/Response/Venta/TB_Producto/Response-VW-Producto';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ResponseListProducto } from 'src/app/models/Response/Venta/TB_Producto/Response-List-Producto';
import { AccionMantConst } from 'src/app/constants/general_constant';
import { forkJoin } from 'rxjs';
import { UnidadService } from 'src/app/modules/mantenimiento/Unidad/service/unidad.service';
import { ResponseUnidad } from 'src/app/models/Response/Produccion/Response_Unidad';

@Component({
  selector: 'app-ven-list-producto',
  templateUrl: './ven-list-producto.component.html',
  styleUrls: ['./ven-list-producto.component.scss']
})
export class VenListProductoComponent implements OnInit {

  //* Declaraciones de variables locales
  config = {
    backdrop: true,
    ignoreBackdropClick: true
  }
  bsModal?: BsModalRef;
  titleModal: string = "";
  acctionModal: number = 0;
  responseVWProducto: ResponseVWProducto [] = [];
  resVwProducto: ResponseVWProducto = new ResponseVWProducto();
  listProducto: ResponseListProducto = new ResponseListProducto();
  unidadList: ResponseUnidad [] = [];

  //* LLamada al constructor
  constructor(private productoService: ProductoService, private bsModalService: BsModalService,
              private unidadService: UnidadService){}
  //* Método de tiempo de vida de componente
  ngOnInit(): void {
  this.ListarProductos();
  this.ListarData();
  }
  //*Métodos de Crud
  ListarProductos(){
    this.productoService.GetAll().subscribe({
      next: (data: ResponseVWProducto []) => {
        this.responseVWProducto = data;
      },
      error: (error) => {alert(error)},
      complete: () => {}
    });
  }
  CreateProducto(template: TemplateRef<any>){
    //this.resVwProducto = new ResponseVWProducto();
    this.listProducto = new ResponseListProducto();
    this.titleModal = "Crear un nuevo Producto"
    this.acctionModal = AccionMantConst.crear;
    this.OpenModal(template);
  }
  EditarProducto(template: TemplateRef<any>, producto: ResponseListProducto){
    this.listProducto = producto;
    this.titleModal = "Actualizar Producto";
    this.acctionModal = AccionMantConst.editar;
    this.OpenModal(template);
  }

  //*Métodos del Modal
  OpenModal(template: TemplateRef<any>){
    this.bsModal = this.bsModalService.show(template,
      Object.assign({},{class:"gray modal-md"},this.config));
  }

  ListarData()
  {
    forkJoin([
      this.unidadService.GetAll()
    ]).subscribe({
      next:(data: any)=>{
        this.unidadList = data[0];
      },
      error:()=>{},
      complete:()=>{}
    })
  }
  GetCloseModalEmmit(res: boolean){
    this.bsModal?.hide();
    if(res)
    {
      this.ListarProductos();
    }
  }
}
