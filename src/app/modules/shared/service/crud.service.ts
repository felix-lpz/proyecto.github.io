import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { InterfaceCrud } from '../interface/Interface_Crud';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService<T,Y> implements InterfaceCrud<T,Y> {

  constructor(protected http:HttpClient,
                        @Inject('url_service') public url_service: string) 
  {

  }
  GetAll(): Observable<Y[]> {
    return this.http.get<Y[]>(this.url_service);
  }
  Create(requets: T): Observable<Y> {
    return this.http.post<Y>(this.url_service,requets);
  }
  Update(request: T): Observable<Y> {
    return this.http.put<Y>(this.url_service,request);
  }
  Delete(id: number): Observable<number> {
    return this.http.delete<number>(`${this.url_service}${id}`);
  }
}
