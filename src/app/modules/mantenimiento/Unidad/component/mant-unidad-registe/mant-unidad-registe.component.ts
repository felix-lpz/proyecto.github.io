import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResponseUnidad } from 'src/app/models/Response/Produccion/Response_Unidad';
import { RequestUnidad } from '../../../models/Produccion/unidad/Request_Unidad';
import { AccionMantConst } from 'src/app/constants/general_constant';
import { UnidadService } from '../../service/unidad.service';

@Component({
  selector: 'app-mant-unidad-registe',
  templateUrl: './mant-unidad-registe.component.html',
  styleUrls: ['./mant-unidad-registe.component.scss']
})
export class MantUnidadRegisteComponent implements OnInit {
  @Input() title:string = "";
  @Input() actionModal: number = 0;
  @Input() unidad: ResponseUnidad = new ResponseUnidad();
  @Output() closeModalEmmit = new EventEmitter<boolean>();

  myForm: FormGroup;
  unidadCargo: RequestUnidad = new RequestUnidad();

  constructor(private fb: FormBuilder,private unidaServicio:UnidadService)
  {
    this.myForm = this.fb.group(
      {
        idUnidad: [{value:0, disabled: true},[Validators.required]],
        nombreUnidad: [null,[Validators.required]],
        descripcion: [null,[Validators.required]]
      }
    )
  }
  ngOnInit(): void {
    this.myForm.patchValue(this.unidad)
  }
  Guardar(){
    this.unidadCargo = this.myForm.getRawValue();

    switch(this.actionModal)
    {
      case AccionMantConst.crear:
        this.CrearUnidad();
        break;
      case AccionMantConst.editar:
        this.ActualizarUnidad();
        break;
    }
  }
  CrearUnidad()
  {
    this.unidaServicio.Create(this.unidadCargo).subscribe({
      next: (data:ResponseUnidad)=>{
        alert("registro creado")
      },
      error:(errr)=>{
        alert("Ocurio un error")
      },
      complete:()=>{ this.cerrarModal(true)}
    });
  }
  ActualizarUnidad()
  {
    this.unidaServicio.Update(this.unidadCargo).subscribe({
      next: (data:ResponseUnidad)=>{
        alert("Actualizado creado")
      },
      error:(errr)=>{
        alert("Ocurio un error")
      },
      complete:()=>{this.cerrarModal(true)}
    });
  }
  cerrarModal(res: boolean) {
    //true ==> hubo modificación en base de datos ==> necesito volver a cargar la lista
    //false ==> NO hubo modificación en base de datos ==> NOOOOOO necesito volver a cargar la lista
    this.closeModalEmmit.emit(res);
  }
}
