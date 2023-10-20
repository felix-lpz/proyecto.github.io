import {Observable} from "rxjs";

export interface InterfaceCrud<T,Y>
{
    GetAll(): Observable<Y[]>;
    Create(requets: T):Observable<Y>;
    Update(request: T):Observable<Y>;
    Delete(id:number):Observable<number>;
}