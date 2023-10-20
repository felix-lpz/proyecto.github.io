import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/modules/shared/service/crud.service';
import { RequestUnidad } from '../../models/Produccion/unidad/Request_Unidad';
import { ResponseUnidad } from 'src/app/models/Response/Produccion/Response_Unidad';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { urlConstants } from 'src/app/constants/constant.url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnidadService extends CrudService<RequestUnidad,ResponseUnidad>{

  constructor(protected https:HttpClient) {
    super(https,urlConstants.unidad);
   }
   CreateUnidad(request:RequestUnidad):Observable<ResponseUnidad>
   {
    let auth_token = sessionStorage.getItem("token");
    const jwtHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.https.post<ResponseUnidad>(urlConstants.unidad,request);
   }
}
