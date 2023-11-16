import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlConstants } from 'src/app/constants/constant.url';
import { ResponseVWTrasporte } from 'src/app/models/Response/Venta/TB_Trasporte/Response-VW-Trasporte';
import { VwTrasporte } from 'src/app/models/Response/Venta/TB_Trasporte/VW-Trasporte';
import { RequestVWTrasporte } from 'src/app/modules/models/Ventas/TB_Trasporte/Request-VW-Trasporte';
import { CrudService } from 'src/app/modules/shared/service/crud.service';

@Injectable({
  providedIn: 'root'
})
export class TrasporteService extends CrudService<RequestVWTrasporte,ResponseVWTrasporte> {

  constructor(protected https:HttpClient) {
    super(https,urlConstants.trasporte);
   }
   GetWithDNI(doc:string,num:string):Observable<VwTrasporte>
   {
    return this.https.get<VwTrasporte>(`${urlConstants.trasporte}/dni/${doc}/${num}`);
   }
}
