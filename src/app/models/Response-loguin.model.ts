import { ResponseVWUsuario } from "./Response/Sistema/Response-VW-Usuario";
import { ResponsePersona } from "./Response/Sistema/Response_Persona";

export class ResponseLogin {
    success: boolean = true;
    mensaje: string = "";
    token: string = "";
    tokenExpira: string = "";
    vWUsuario: ResponseVWUsuario = new ResponseVWUsuario() ;
    persona: ResponsePersona = new ResponsePersona() ;
}