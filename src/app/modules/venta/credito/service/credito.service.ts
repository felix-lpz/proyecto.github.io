import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlConstants } from 'src/app/constants/constant.url';
import { ResponseVWCredito } from 'src/app/models/Response/Venta/TB_Credito/Response-VW-Credito';
import { RequestVWCredito } from 'src/app/modules/models/Ventas/TB_Credito/Request-VW-Credito';
import { CrudService } from 'src/app/modules/shared/service/crud.service';

@Injectable({
  providedIn: 'root'
})
export class CreditoService extends CrudService<RequestVWCredito,ResponseVWCredito> {

  constructor(protected https:HttpClient) {
    super(https,urlConstants.credito);
   }
}
