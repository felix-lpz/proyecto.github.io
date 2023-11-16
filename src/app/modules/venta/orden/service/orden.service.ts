import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlConstants } from 'src/app/constants/constant.url';
import { ResponseVWOrden } from 'src/app/models/Response/Venta/TB_Orden/Response-VW-Orden';
import { RequestVWOrden } from 'src/app/modules/models/Ventas/TB_Orden/Request-VW-Orden';
import { CrudService } from 'src/app/modules/shared/service/crud.service';

@Injectable({
  providedIn: 'root'
})
export class OrdenService extends CrudService<RequestVWOrden,ResponseVWOrden> {

  constructor(protected https:HttpClient) {
    super(https, urlConstants.orden);
   }
}
