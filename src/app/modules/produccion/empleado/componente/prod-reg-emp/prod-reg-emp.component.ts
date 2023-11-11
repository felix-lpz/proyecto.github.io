import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { EmpleadoService } from '../../service/empleado.service';
import { VwEmpleado } from 'src/app/models/Response/Produccion/tb-empleado/Vw-Empleado';
import { ResponseVWCliente } from 'src/app/models/Response/Venta/Response-VW-Cliente';
import { ResponseVWEmpleado } from 'src/app/models/Response/Produccion/tb-empleado/Reponse-Vw-Empleado';
import { ResponseEmpleado } from 'src/app/models/Response/Produccion/tb-empleado/Response-Empleado';
import { RequestVWEmpleado } from 'src/app/modules/models/produccion/tb-empleado/Request-Vw-Empleado';
import { AccionMantConst } from 'src/app/constants/general_constant';
import { ConvertToBoolean } from 'src/app/functions/General_Fuctions';

@Component({
  selector: 'app-prod-reg-emp',
  templateUrl: './prod-reg-emp.component.html',
  styleUrls: ['./prod-reg-emp.component.scss']
})
export class ProdRegEmpComponent implements OnInit {
  //*Declaracion de variables que Recibo
  @Input() title: string = "";
  @Input() actionModal:number = 0;
  @Input() responseVwEmpleado: ResponseVWEmpleado = new ResponseVWEmpleado();
  @Input() responseEmpleado: ResponseEmpleado = new ResponseEmpleado();

  //* Declaracion de variables de envio
  @Output() closeModalEmmit = new EventEmitter<boolean>();

  //*Declaracion de varaibles
  myForm: FormGroup;
  vempleado: VwEmpleado = new VwEmpleado();
  requestEmpleado: RequestVWEmpleado = new RequestVWEmpleado();
  doc:string = "";
  num:string = "";

  //* Declaracion del constructor
 constructor(private fb: FormBuilder,private empleadoService:EmpleadoService){
  this.myForm = fb.group({
    idEmpleado:[{value:0,disabled:true},[Validators.required]],
    nombrePersona:[null,[Validators.required]], 
    apellidoEmp:[null,[Validators.required]], 
    tipoPersona:[null,[Validators.required]], 
    tipoDocumento:[null,[Validators.required]], 
    numeroDocumento:[null,[Validators.required]], 
    telefono:[null,[Validators.required]], 
    codigoUbigeo:[null,[Validators.required]], 
    direccion:[null,[Validators.required]],
    salario:[null,[Validators.required]],
    estado:[null,[Validators.required]]
  })
 }
  ngOnInit(): void {
    this.myForm.patchValue(this.responseVwEmpleado);
  }

 //*Métodos Crud
 Guardar(){
  debugger;
  this.requestEmpleado = this.myForm.getRawValue();
  this.requestEmpleado.estado = ConvertToBoolean(this.myForm.getRawValue().estado);
  switch(this.actionModal)
  {
    case AccionMantConst.crear:
      this.CrearEmpleado();
      break;
    case AccionMantConst.editar:
      this.EditarEmpleado();
      break;
  }
 }

 CrearEmpleado()
 {
  this.empleadoService.Create(this.requestEmpleado).subscribe({
    next:(data:ResponseEmpleado)=>{
      this.responseEmpleado = data;
      alert("Registro de mensaje");
    },
    error:()=>{ console.log("occurrio un error")},
    complete:()=>{
      this.cerrarModal(true);
    }
  })
 }
 EditarEmpleado()
 {
  this.empleadoService.Update(this.requestEmpleado).subscribe({
    next:(data:ResponseEmpleado)=>{
      this.responseEmpleado = data;
      alert(data.message);
    },
    error:()=>{ console.log("occurrio un error")},
    complete:()=>{
      this.cerrarModal(true);
    }
  })
 }

 BuscarDocumento(){
  this.doc = this.myForm.getRawValue().tipoDocumento;
  this.num = this.myForm.getRawValue().numeroDocumento;
  this.empleadoService.GetWithDNI(this.doc,this.num).subscribe({
    next:(data: VwEmpleado)=>{
      if(data.nombrePersona != "")
      {
        data.tipoDocumento = this.doc
        this.myForm.patchValue(data)
      }
      else
      {
        console.log("no existe documento");
      }
    },
    error:()=>{},
    complete:()=>{}
  });
 }
 //* Métodos del modal
 cerrarModal(res: boolean){
  this.closeModalEmmit.emit(res);
 }
}
