import { Component, EventEmitter, Input, OnInit, Output, ɵsetAlternateWeakRefImpl } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResponseMaterial } from 'src/app/models/Response/Compra/Material/Response-Material';
import { ResponseVwMaterial } from 'src/app/models/Response/Compra/Material/Response-Vw-Material';
import { UnidadService } from '../../../Unidad/service/unidad.service';
import { ResponseUnidad } from 'src/app/models/Response/Produccion/Response_Unidad';
import { MaterialService } from '../../service/material.service';
import { RequestMaterial } from '../../../models/Compra/Request-Material';
import { AccionMantConst } from 'src/app/constants/general_constant';

@Component({
  selector: 'app-mant-material-registro',
  templateUrl: './mant-material-registro.component.html',
  styleUrls: ['./mant-material-registro.component.scss']
})
export class MantMaterialRegistroComponent implements OnInit {
  @Input() title:string = "";
  @Input() acctionModal:number = 0;
  @Input() material: ResponseVwMaterial = new ResponseVwMaterial();
  @Input() materialrespuesta: ResponseMaterial = new ResponseMaterial();
  @Input() listarUnidad: ResponseUnidad [] = [];
  @Output() closeModalEmmit = new EventEmitter<boolean>();

  myForm:FormGroup;
  requestmaterial: RequestMaterial = new RequestMaterial();
  responseUnidad:ResponseUnidad[] = [];

  constructor(private fb:FormBuilder, private unidadService:UnidadService,private materialService:MaterialService){
    this.myForm = this.fb.group({
      idMaterial:[{value:0, disabled:true},[Validators.required]],
      nombreMaterial:[null,[Validators.required]],
      nombreUnidad: [null,[Validators.required]],
      stock: [{value:1,disabled:true},[Validators.required]],
      descripcion: [null,[Validators.required]],
      marca: [null, [Validators.required]],
      estado: [null,[Validators.required]]
    });
  }
  ngOnInit(): void {
    this.CargarUnidad();
    this.myForm.patchValue(this.material)
  }
  Guardar(){
    this.requestmaterial = this.myForm.getRawValue();
    switch(this.acctionModal)
    {
      case AccionMantConst.crear:
        this.CrearMaterial();
        break;
      case AccionMantConst.editar:
        this.ActualizarMaterial();
        break;
    }
  }
  CargarUnidad(){
    this.unidadService.GetAll().subscribe({
      next:(data:ResponseUnidad[])=>{
        this.responseUnidad = data;
      },
      error:()=>{},
      complete:()=>{}
    })
  }
  CrearMaterial()
  {
    this.materialService.Create(this.requestmaterial).subscribe({
      next: (data:ResponseMaterial)=>{
        
        alert(data.message);
      },
      error:(errr)=>{
        alert("Ocurio un error")
      },
      complete:()=>{ this.cerrarModal(true)}
    });
  }
  ActualizarMaterial()
  {
    this.materialService.Update(this.requestmaterial).subscribe({
      next: (data: ResponseMaterial)=>{
        alert(data.message);
      },
      error:(err)=>
      {
        alert(err);
      },
      complete:()=>{this.cerrarModal(true)}
    })
  }
  //* Métodos Cerrar Modal
  cerrarModal(res:boolean){
    this.closeModalEmmit.emit(res);
  }
}
