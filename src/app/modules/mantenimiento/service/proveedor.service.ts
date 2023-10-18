import { Injectable } from '@angular/core';
import { CrudService } from '../../shared/service/crud.service';
import { ResponseProvedor } from 'src/app/models/Response/Compra/Response_Provedor';
import { HttpClient } from '@angular/common/http';
import { urlConstants } from 'src/app/constants/constant.url';
import { RequestProveedor } from '../models/Compra/Request_Proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService extends CrudService<RequestProveedor,ResponseProvedor> {

  constructor(protected https: HttpClient) 
  {
    super(https,urlConstants.auth)
  }
}
