import { Injectable } from '@angular/core';
import { CrudService } from '../../../shared/service/crud.service';
import { ResponseProvedor } from 'src/app/models/Response/Compra/Response_Provedor';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { urlConstants } from 'src/app/constants/constant.url';
import { RequestProveedor } from '../../models/Compra/Request_Proveedor';
import { Observable } from 'rxjs';
import { ResponseVWProvedor } from 'src/app/models/Response/Compra/Response_VW_Provedor';
import { VWProvedor } from 'src/app/models/Response/Compra/TB_Proveedor/Vw-Proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService extends CrudService<RequestProveedor,ResponseVWProvedor> {

  constructor(protected https: HttpClient) 
  {
    super(https,urlConstants.provedor)
  }

  MostrarProvedor():Observable<ResponseVWProvedor[]>
  {
    let auth_token = sessionStorage.getItem("token");
    const jwtHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.https.get<ResponseVWProvedor[]>(urlConstants.provedor,{headers: jwtHeader});
  }
  GetWithDNI(doc:string,num:string):Observable<VWProvedor>
   {
    return this.https.get<VWProvedor>(`${urlConstants.empleado}/dni/${doc}/${num}`);
   }
}
