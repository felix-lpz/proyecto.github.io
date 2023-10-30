import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlConstants } from 'src/app/constants/constant.url';
import { ResponseVWCliente } from 'src/app/models/Response/Venta/Response-VW-Cliente';
import { RequestVWCliente } from 'src/app/modules/models/Ventas/Request-VW-Cliente';
import { CrudService } from 'src/app/modules/shared/service/crud.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends CrudService<RequestVWCliente,ResponseVWCliente> {

  constructor(protected https:HttpClient) {
    super(https,urlConstants.cliente)
   }
}
