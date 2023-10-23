import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResponseMaterial } from 'src/app/models/Response/Compra/Response-Material';

@Component({
  selector: 'app-mant-material-registro',
  templateUrl: './mant-material-registro.component.html',
  styleUrls: ['./mant-material-registro.component.scss']
})
export class MantMaterialRegistroComponent {
  @Input() title:string = "";
  @Input() acctionModal:number = 0;
  @Input() material: ResponseMaterial = new ResponseMaterial();
  @Output() closeModalEmmit = new EventEmitter<boolean>();

  myForm:FormGroup;

  constructor(private fb:FormBuilder){
    this.myForm = this.fb.group({
      idMaterial:[{value:0, disabled:true},[Validators.required]],
      nombreMaterial: [null,[Validators.required]],
      stock: [{value:1,disabled:false},[Validators.required]],
      descripcion: [null,[Validators.required]],
      marca: [null, [Validators.required]],
      estado: [null,[Validators.required]]
    });
  }
  Guardar(){

  }


  //* Métodos Cerrar Modal
  cerrarModal(res:boolean){
    this.closeModalEmmit.emit(res);
  }
}
