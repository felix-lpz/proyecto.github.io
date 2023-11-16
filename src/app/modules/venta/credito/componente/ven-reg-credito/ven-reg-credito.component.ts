import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AccionMantConst } from 'src/app/constants/general_constant';
import { ResponseVWCliente } from 'src/app/models/Response/Venta/Response-VW-Cliente';
import { ResponseListCredito } from 'src/app/models/Response/Venta/TB_Credito/Response-List-Credito';
import { ResponseVWCredito } from 'src/app/models/Response/Venta/TB_Credito/Response-VW-Credito';
import { RequestVWCredito } from 'src/app/modules/models/Ventas/TB_Credito/Request-VW-Credito';
import { CreditoService } from '../../service/credito.service';

@Component({
  selector: 'app-ven-reg-credito',
  templateUrl: './ven-reg-credito.component.html',
  styleUrls: ['./ven-reg-credito.component.scss']
})
export class VenRegCreditoComponent implements OnInit {
  //* Recibir
  @Input() title: string = "";
  @Input() actionModal: number = 0;
  @Input() resVWCredito: ResponseVWCredito = new ResponseVWCredito();
  @Input() resListCredito: ResponseListCredito = new ResponseListCredito();
  @Input() resVWCLiente: ResponseVWCliente [] = [];
  //* enviar
  @Output() CloseEmitterModal = new EventEmitter<boolean>();

  //* Variables Locales
  myForm: FormGroup;
  reqVWCredito: RequestVWCredito = new RequestVWCredito();

  //* Constructor
  constructor(private fb:FormBuilder,
              private creditoSerivice: CreditoService){
    this.myForm = fb.group({
      idCredito: [{value: 0, disabled: true},[Validators.required]],
      nombrePersona: [null, [Validators.required]],
      montoDeuda: [null,[Validators.required]],
      montoPagado: [null,[Validators.required]],
      montoTotal: [null,[Validators.required]],
      estadoCredito: [null,[Validators.required]]
    });
  }
  //* vida componente
  ngOnInit(): void {
    this.myForm.patchValue(this.resListCredito);
  }
  //* Métodos Crud
  Guardar(){
    this.reqVWCredito = this.myForm.getRawValue();
    switch(this.actionModal)
    {
      case AccionMantConst.crear:
        this.CrearCredito();
        break;
      case AccionMantConst.editar:
        this.EditarCredito();
        break;
    }
  }
  CrearCredito(){
    this.creditoSerivice.Create(this.reqVWCredito).subscribe({
      next:(data:ResponseVWCredito)=>{
        alert(data.message);
      },
      error:()=>{},
      complete:()=>{this.CerrarModal(true)}
    });
  }
  EditarCredito(){
    this.creditoSerivice.Update(this.reqVWCredito).subscribe({
      next:(data:ResponseVWCredito)=>{
        alert(data.message);
      },
      error:()=>{},
      complete:()=>{this.CerrarModal(true)}
    });
  }
  //* Métodos modal
  CerrarModal(res: boolean){
    this.CloseEmitterModal.emit(res);
  }
}
