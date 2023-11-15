import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ResponseListTrasporte } from 'src/app/models/Response/Venta/TB_Trasporte/Response-List-Trasporte';
import { ResponseVWTrasporte } from 'src/app/models/Response/Venta/TB_Trasporte/Response-VW-Trasporte';
import { TrasporteService } from '../../service/trasporte.service';
import { RequestVWTrasporte } from 'src/app/modules/models/Ventas/TB_Trasporte/Request-VW-Trasporte';
import { AccionMantConst } from 'src/app/constants/general_constant';

@Component({
  selector: 'app-ven-reg-trasporte',
  templateUrl: './ven-reg-trasporte.component.html',
  styleUrls: ['./ven-reg-trasporte.component.scss']
})
export class VenRegTrasporteComponent implements OnInit {
  //* Ingreso de datos
  @Input() title: string = "";
  @Input() actionModal: number = 0;
  @Input() listTrasporte: ResponseListTrasporte = new ResponseListTrasporte();
  @Input() resTrasporte: ResponseVWTrasporte = new ResponseVWTrasporte(); 
  //* Salida de datos
  @Output() CloseModalEmmit = new EventEmitter<boolean>();

  //* Varaibale locales
  myForm: FormGroup;
  reqTrasporte: RequestVWTrasporte = new RequestVWTrasporte();

  //* construt
  constructor(private fb:FormBuilder,
              private trasporteService: TrasporteService){
    this.myForm = fb.group({
      idTrasporte:[{value: 0, disabled: true},[Validators.required]],
      nombrePersona:[null,[Validators.required]],
      tipoPersona:[null,[Validators.required]],
      tipoDocumento:[null,[Validators.required]],
      numeroDocumento:[null,[Validators.required]],
      telefono:[null,[Validators.required]],
      codigoUbigeo:[null,[Validators.required]],
      direccion:[null,[Validators.required]],
      numeroPlaca:[null,[Validators.required]],
      licenciaConductor:[null,[Validators.required]],
      tipoAutomovil:[null,[Validators.required]]
    });
  }
  ngOnInit(): void {
    this.myForm.patchValue(this.listTrasporte);
  }
  //*
  BuscarDocumento(){}
  Guardar(){
    this.reqTrasporte = this.myForm.getRawValue();
    switch(this.actionModal)
    {
      case AccionMantConst.crear:
        this.CrearTrasporte();
        break;
      case AccionMantConst.editar:
        this.EditrarTrasporte();
        break;
    }
  }
  CrearTrasporte(){
    this.trasporteService.Create(this.reqTrasporte).subscribe({
      next: (data: ResponseVWTrasporte) =>{
        alert(data.message);
      },
      error: () =>{},
      complete: () =>{}
    });
  }
  EditrarTrasporte(){
    this.trasporteService.Update(this.reqTrasporte).subscribe({
      next: (data: ResponseVWTrasporte) =>{
        alert(data.message);
      },
      error: () =>{},
      complete: () =>{}
    });
  }
  //* Métodos de modal
  CloseModal(res: boolean){
    this.CloseModalEmmit.emit(res);
  }
}
