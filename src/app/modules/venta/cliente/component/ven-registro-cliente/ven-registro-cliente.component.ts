import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccionMantConst } from 'src/app/constants/general_constant';
import { ConvertToBoolean } from 'src/app/functions/General_Fuctions';
import { ResponseVwMaterial } from 'src/app/models/Response/Compra/Material/Response-Vw-Material';
import { ResponseListCliente } from 'src/app/models/Response/Venta/Response-List-Cliente';
import { ResponseVWCliente } from 'src/app/models/Response/Venta/Response-VW-Cliente';
import { RequestVWCliente } from 'src/app/modules/models/Ventas/Request-VW-Cliente';
import { ClienteService } from '../../service/cliente.service';
import { MessageAlert, MessageSucess } from 'src/app/functions/Message_Fuctions';
import { VWCliente } from 'src/app/models/Response/Venta/TB_Cliente/Vw-Cliente';

@Component({
  selector: 'app-ven-registro-cliente',
  templateUrl: './ven-registro-cliente.component.html',
  styleUrls: ['./ven-registro-cliente.component.scss']
})
export class VenRegistroClienteComponent implements OnInit {
  
  //*Ingreso de datos
  @Input() title:string ="";
  @Input() accion:number = 0;
  @Input() responseVwCliente: ResponseVWCliente = new ResponseVWCliente();
  @Input() responsListCliente:ResponseListCliente = new ResponseListCliente();
  
  //*Salida de datos
  @Output() closeModalEmmit = new EventEmitter<boolean>();

  //* Variables Locales
  myForm:FormGroup
  requestCiente:RequestVWCliente = new RequestVWCliente();
  num: string = "";
  doc: string = "";

  constructor(private fb:FormBuilder, private clienteService:ClienteService){
    this.myForm = this.fb.group({
        idCliente: [{ value: 0, disabled: true }, [Validators.required]],
        nombrePersona: [{value: "",disabled: true}, [Validators.required]],
        tipoPersona: [{value: "",disabled: true}, [Validators.required]],
        tipoDocumento: [{value: "",disabled: true}, [Validators.required]],
        numeroDocumento: [null, [Validators.required]],
        telefono: [null, [Validators.required]],
        codigoUbigeo: [null,[Validators.required]],
        direccion: [null,[Validators.required]],
        fechaNacimiento: [null,[Validators.required]],
        estado: [null,[Validators.required]]
    });
  }
  ngOnInit(): void {
    this.myForm.patchValue(this.responsListCliente);
  }
  //*Metodos
  Guardar(){
    this.requestCiente = this.myForm.getRawValue();
    this.requestCiente.estado = ConvertToBoolean(this.myForm.getRawValue().estado);
    //this.requestCiente.fechaNacimiento = Date.parse(this.myForm.getRawValue().fechaNacimiento.toString()).toString();
    switch(this.accion)
    {
      case AccionMantConst.crear:
        this.CrearCliente();
        break;
      case AccionMantConst.editar:
        this.EditarCliente();
        break;
    }
  }
  BuscarDocumento()
  {
    this.num = this.myForm.getRawValue().numeroDocumento;
    switch(this.num.length)
    {
      case 8:
        this.doc = "dni"
        this.clienteService.GetWithDNI(this.doc, this.num).subscribe({
        next:(data: VWCliente)=>{
          data.idCliente = 0;
          data.tipoDocumento = this.doc;
          data.tipoPersona = "Natural";
          data.nombrePersona != ""? this.myForm.patchValue(data): alert("No se  encontro el usuario");
        },
        error:()=>{},
        complete:()=>{}
      })
        break;
      case 11:
        this.doc = "ruc"
        this.clienteService.GetWithDNI(this.doc, this.num).subscribe({
        next:(data: VWCliente)=>{
          data.idCliente = 0;
          data.tipoDocumento = this.doc;
          data.tipoPersona = "Juridica";
          data.nombrePersona != ""? this.myForm.patchValue(data): alert("No se  encontro el usuario");
        },
        error:()=>{},
        complete:()=>{}
        })
        break;
      default:
        alert("No se en Encontro el usuaro");
        break;
    }
  }
  CrearCliente()
  {
    debugger;
    this.clienteService.Create(this.requestCiente).subscribe({
      next:(data: ResponseVWCliente)=>{
        MessageSucess();
      },
      error:()=>{MessageAlert();},
      complete:()=>{this.cerrarModal(true)}
    });
  }
  EditarCliente()
  {
    this.clienteService.Update(this.requestCiente).subscribe({
      next:(data: ResponseVWCliente)=>{
        MessageSucess();
      },
      error:()=>{MessageAlert();},
      complete:()=>{this.cerrarModal(true)}
    });
  }
  cerrarModal(res:boolean){
    this.closeModalEmmit.emit(res);
  }
}
