import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResponseListProduccion } from 'src/app/models/Response/Produccion/TB_Production/Response-List-Production';
import { ResponseVWProduccion } from 'src/app/models/Response/Produccion/TB_Production/Response-VW-Production';
import { RequestVWProduccion } from 'src/app/modules/models/produccion/TB_Production/Request-Vw-Production';
import { ProductionService } from '../../service/production.service';
import { AccionMantConst } from 'src/app/constants/general_constant';
import { ResponseUnidad } from 'src/app/models/Response/Produccion/Response_Unidad';

@Component({
  selector: 'app-prod-reg-production',
  templateUrl: './prod-reg-production.component.html',
  styleUrls: ['./prod-reg-production.component.scss']
})
export class ProdRegProductionComponent implements OnInit {
  //* Variables de locales
  myForm: FormGroup;
  requestVWProduction: RequestVWProduccion = new RequestVWProduccion();
  //* Variables de Entrada
  @Input() title: string = "";
  @Input() acttioModal: number = 0;
  @Input() responseVWProduction: ResponseVWProduccion = new ResponseVWProduccion();
  @Input() responseListProducton: ResponseListProduccion = new ResponseListProduccion();
  @Input() listarUnidad: ResponseUnidad [] = [];
  //* Variables de Salida
  @Output() CloseModalEmitter = new EventEmitter<boolean>();
  //* Componente de vida
  ngOnInit(): void {
    this.myForm.patchValue(this.responseListProducton);
  }
  //* Constructor
  constructor(private fb:FormBuilder,
              private productionService: ProductionService){
    this.myForm = this.fb.group({
      idProduccion:[{value: "", disabled: true},[Validators.required]],
      nombreUnidad:[null,[Validators.required]],
      meta:[null,[Validators.required]],
      cantidadFaltante:[null,[Validators.required]],
      fechaInicio:[null,[Validators.required]],
      fechaFinalizacion:[null,[Validators.required]],
      estadoProduccion:[null,[Validators.required]]
    });
  }
  //* Métodos crud
  Guardar(){
    this.requestVWProduction = this.myForm.getRawValue();
    switch(this.acttioModal){
      case AccionMantConst.crear:
        this.CrearProduction();
        break;
      case AccionMantConst.editar:
        this.EditarProduction();
        break;
    }
  }
  CrearProduction(){
    this.productionService.Create(this.requestVWProduction).subscribe({
      next: (data: ResponseVWProduccion)=>{
        alert(data.message)
      },
      error: (error)=>{ alert(error.message)},
      complete: ()=>{this.CloseModal(true)}
    });
  }
  EditarProduction(){
    this.productionService.Update(this.requestVWProduction).subscribe({
      next: (data: ResponseVWProduccion)=>{
        alert(data.message)
      },
      error: (error)=>{ alert(error.message)},
      complete: ()=>{this.CloseModal(true)}
    });
  }
  //* Métodos modal
  CloseModal(res: boolean){
    this.CloseModalEmitter.emit(res);
  }
}
