import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/modules/shared/service/crud.service';
import { RequestMaterial } from '../../models/Compra/Request-Material';
import { ResponseMaterial } from 'src/app/models/Response/Compra/Material/Response-Material';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { urlConstants } from 'src/app/constants/constant.url';
import { ResponseVwMaterial } from 'src/app/models/Response/Compra/Material/Response-Vw-Material';
import { ResponseProvedor } from 'src/app/models/Response/Compra/Response_Provedor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaterialService extends CrudService<RequestMaterial,ResponseMaterial>{

  constructor(protected https:HttpClient) {
    super(https,urlConstants.material);
   }
   MostrarMaterial():Observable<ResponseMaterial[]>
   {
     let auth_token = sessionStorage.getItem("token");
     const jwtHeader = new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization': `Bearer ${auth_token}`
     })
     return this.https.get<ResponseMaterial[]>(urlConstants.material,{headers: jwtHeader});
   }
}
