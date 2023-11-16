import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlConstants } from 'src/app/constants/constant.url';
import { ResponseVWProduccion } from 'src/app/models/Response/Produccion/TB_Production/Response-VW-Production';
import { RequestVWProduccion } from 'src/app/modules/models/produccion/TB_Production/Request-Vw-Production';
import { CrudService } from 'src/app/modules/shared/service/crud.service';

@Injectable({
  providedIn: 'root'
})
export class ProductionService extends CrudService<RequestVWProduccion,ResponseVWProduccion>{

  constructor(protected https:HttpClient) {
    super(https,urlConstants.produccion);
   }
}
