import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlConstants } from 'src/app/constants/constant.url';
import { ResponseModelo } from 'src/app/models/Response/Venta/TB_Modelo/Response-Modelo';
import { RequestModelo } from 'src/app/modules/models/Ventas/TB_Modelo/Request-Modelo';
import { CrudService } from 'src/app/modules/shared/service/crud.service';

@Injectable({
  providedIn: 'root'
})
export class ModeloService extends CrudService<RequestModelo,ResponseModelo> {

  constructor(protected https:HttpClient) {
    super(https,urlConstants.modelo);
   }
}
