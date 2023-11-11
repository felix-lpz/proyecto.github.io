import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlConstants } from 'src/app/constants/constant.url';
import { AccionMantConst } from 'src/app/constants/general_constant';
import { ResponseEmpleado } from 'src/app/models/Response/Produccion/tb-empleado/Response-Empleado';
import { VwEmpleado } from 'src/app/models/Response/Produccion/tb-empleado/Vw-Empleado';
import { RequestVWEmpleado } from 'src/app/modules/models/produccion/tb-empleado/Request-Vw-Empleado';
import { CrudService } from 'src/app/modules/shared/service/crud.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService extends CrudService<RequestVWEmpleado,ResponseEmpleado> {

  constructor(protected https:HttpClient) {
    super(https,urlConstants.empleado)
   }
   GetWithDNI(doc:string,num:string):Observable<VwEmpleado>
   {
    return this.https.get<VwEmpleado>(`${urlConstants.empleado}/dni/${doc}/${num}`);
   }
}
