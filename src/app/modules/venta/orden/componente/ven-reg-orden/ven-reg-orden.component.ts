import { Component, DebugElement, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResponseListOrden } from 'src/app/models/Response/Venta/TB_Orden/Response-List-Orden';
import { ResponseVWOrden } from 'src/app/models/Response/Venta/TB_Orden/Response-VW-Orden';
import { RequestVWOrden } from 'src/app/modules/models/Ventas/TB_Orden/Request-VW-Orden';
import { OrdenService } from '../../service/orden.service';
import { AccionMantConst } from 'src/app/constants/general_constant';
import { ResponseVWCliente } from 'src/app/models/Response/Venta/Response-VW-Cliente';
import { ConvertToBoolean } from 'src/app/functions/General_Fuctions';

@Component({
  selector: 'app-ven-reg-orden',
  templateUrl: './ven-reg-orden.component.html',
  styleUrls: ['./ven-reg-orden.component.scss']
})
export class VenRegOrdenComponent implements OnInit{
  //* variables locales
  requesVWOrden: RequestVWOrden = new RequestVWOrden();
  myForm:FormGroup;
  //* Recibir
  @Input() title: string = "";
  @Input() acction: number = 0;
  @Input() responseListOrden: ResponseListOrden = new ResponseListOrden();
  @Input() responseVWOrden: ResponseVWOrden = new ResponseVWOrden();
  @Input() responseVWCliente: ResponseVWCliente [] = [];
  //* Enviar
  @Output() CloseModalEmitt = new EventEmitter<boolean>();
  //* Ciclo de vida
  ngOnInit(): void {
    this.myForm.patchValue(this.responseListOrden);
  }
  //* constructor
  constructor(private fb:FormBuilder,
              private ordenService: OrdenService){
    this.myForm = this.fb.group({
      idOrden: [{value: "", disabled: true},[Validators.required]],
      nombrePersona: [null,[Validators.required]],
      tipoOrden: [null,[Validators.required]],
      fechaOrden: [null,[Validators.required]],
      fechaRequerido: [null,[Validators.required]],
      estadoOrden: [null,[Validators.required]]
    });
  }
  //* métodos crud
  Guardar(){
    this.requesVWOrden = this.myForm.getRawValue();
    this.requesVWOrden.tipoOrden = ConvertToBoolean(this.myForm.getRawValue().tipoOrden)
    switch(this.acction)
    {
      case AccionMantConst.crear:
        this.CrearOrden();
        break;
      case AccionMantConst.editar:
        this.EditarOrden();
        break;
    }
  }
  CrearOrden(){
    this.ordenService.Create(this.requesVWOrden).subscribe({
      next: (data: ResponseVWOrden)=>{
        alert(data.message);
      },
      error: (error)=>{alert(error.message)},
      complete: ()=>{this.CLoseModal(true)}
    });
  }
  EditarOrden(){
    this.ordenService.Update(this.requesVWOrden).subscribe({
      next: (data: ResponseVWOrden)=>{
        alert(data.message);
      },
      error: (error)=>{alert(error.message)},
      complete: ()=>{this.CLoseModal(true)}
    });
  }
  //* métodos modal
  CLoseModal(res:boolean){
    this.CloseModalEmitt.emit(res);
  }
}
