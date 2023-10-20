import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mant-unidad-registe',
  templateUrl: './mant-unidad-registe.component.html',
  styleUrls: ['./mant-unidad-registe.component.scss']
})
export class MantUnidadRegisteComponent {
  @Input() title:string = "";
  @Input() actionModal: number = 0;
  @Output() closeModalEmmit = new EventEmitter<boolean>();

  myForm: FormGroup;

  constructor(private fb: FormBuilder)
  {
    this.myForm = this.fb.group(
      {
        idUnidad: [{value:0, disabled: true},[Validators.required]],
        nombreUnidad: [null,[Validators.required]],
        descripcion: [null,[Validators.required]]
      }
    )
  }
  cerrarModal(res: boolean) {
    //true ==> hubo modificación en base de datos ==> necesito volver a cargar la lista
    //false ==> NO hubo modificación en base de datos ==> NOOOOOO necesito volver a cargar la lista
    this.closeModalEmmit.emit(res);
  }
}
