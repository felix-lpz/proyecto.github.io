import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlConstants } from 'src/app/constants/constant.url';
import { ResponseVWCliente } from 'src/app/models/Response/Venta/Response-VW-Cliente';
import { VWCliente } from 'src/app/models/Response/Venta/TB_Cliente/Vw-Cliente';
import { RequestVWCliente } from 'src/app/modules/models/Ventas/Request-VW-Cliente';
import { CrudService } from 'src/app/modules/shared/service/crud.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends CrudService<RequestVWCliente,ResponseVWCliente> {

  constructor(protected https:HttpClient) {
    super(https,urlConstants.cliente)
   }
   GetWithDNI(doc:string,num:string):Observable<VWCliente>
   {
    return this.https.get<VWCliente>(`${urlConstants.empleado}/dni/${doc}/${num}`);
   }
}
