import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/modules/shared/service/crud.service';
import { RequestMaterial } from '../../models/Compra/Request-Material';
import { ResponseMaterial } from 'src/app/models/Response/Compra/Response-Material';
import { HttpClient } from '@angular/common/http';
import { urlConstants } from 'src/app/constants/constant.url';

@Injectable({
  providedIn: 'root'
})
export class MaterialService extends CrudService<RequestMaterial,ResponseMaterial>{

  constructor(protected https:HttpClient) {
    super(https,urlConstants.material);
   }
}
