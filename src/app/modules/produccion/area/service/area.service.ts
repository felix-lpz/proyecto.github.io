import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlConstants } from 'src/app/constants/constant.url';
import { ResponseArea } from 'src/app/models/Response/Produccion/Response-Area';
import { RequestArea } from 'src/app/modules/models/produccion/Request-Area';
import { CrudService } from 'src/app/modules/shared/service/crud.service';

@Injectable({
  providedIn: 'root'
})
export class AreaService extends CrudService<RequestArea,ResponseArea> {

  constructor(protected https:HttpClient) {
    super(https,urlConstants.area)
   }
}
