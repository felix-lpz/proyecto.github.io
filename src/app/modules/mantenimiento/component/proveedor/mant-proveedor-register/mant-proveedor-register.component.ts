import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResponseProvedor } from 'src/app/models/Response/Compra/Response_Provedor';
import { RequestProveedor } from '../../../models/Compra/Request_Proveedor';
import { ProveedorService } from '../../../service/proveedor.service';

@Component({
  selector: 'app-mant-proveedor-register',
  templateUrl: './mant-proveedor-register.component.html',
  styleUrls: ['./mant-proveedor-register.component.scss']
})
export class MantProveedorRegisterComponent implements OnInit {
  @Input() title: string = "";
  @Input() proveedor: ResponseProvedor = new ResponseProvedor();
  @Input() accion: number = 0;

  @Output() closeModalEmmit = new EventEmitter<boolean>();

  myForm: FormGroup;
  proveedorEnvio: RequestProveedor = new RequestProveedor();

  constructor(private fb: FormBuilder,
             private proveedorService:ProveedorService )
  {
    this.myForm = this.fb.group(
      {
        id: [{ value: 0, disabled: true }, [Validators.required]],
        codigo: [null, [Validators.required]],
        nombre: [null, [Validators.required]],
        idEstado: [null, [Validators.required]],
      })
  }

  ngOnInit(): void {
    console.log("title ==>", this.title);
    console.log("cargo ==>", this.proveedor);

    this.myForm.patchValue(this.proveedor);

  }
  
  cerrarModal(res: boolean) {
    //true ==> hubo modificación en base de datos ==> necesito volver a cargar la lista
    //false ==> NO hubo modificación en base de datos ==> NOOOOOO necesito volver a cargar la lista
    this.closeModalEmmit.emit(res);

  }

}
