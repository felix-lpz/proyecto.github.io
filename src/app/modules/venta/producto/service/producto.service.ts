import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlConstants } from 'src/app/constants/constant.url';
import { ResponseVWProducto } from 'src/app/models/Response/Venta/TB_Producto/Response-VW-Producto';
import { RequestVWProducto } from 'src/app/modules/models/Ventas/TB_Producto/Request-VW-Producto';
import { CrudService } from 'src/app/modules/shared/service/crud.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService extends CrudService<RequestVWProducto,ResponseVWProducto>{

  constructor(protected https:HttpClient) {
    super(https,urlConstants.producto);
   }
}
