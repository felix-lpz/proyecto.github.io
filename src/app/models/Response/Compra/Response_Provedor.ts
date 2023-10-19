import { ResponsePersona } from "../Sistema/Response_Persona";

export class ResponseProvedor
{
    IdProvedor: number = 0;
    Menssage:string = "";
    Persona:ResponsePersona = new ResponsePersona();
}