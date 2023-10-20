import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResponseProvedor } from 'src/app/models/Response/Compra/Response_Provedor';
import { RequestProveedor } from '../../../../models/Compra/Request_Proveedor';
import { ProveedorService } from "../../../service/proveedor.service";
import { AccionMantConst } from 'src/app/constants/general_constant';
import { ResponseVWProvedor } from 'src/app/models/Response/Compra/Response_VW_Provedor';

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
        idProveedor: [{ value: 0, disabled: true }, [Validators.required]],
        nombreProveedor: [null, [Validators.required]],
        tipoPersona: [null, [Validators.required]],
        tipoDocumento: [null, [Validators.required]],
        numeroDocumento: [null, [Validators.required]],
        numeroTelefono: [null, [Validators.required]],
        codigoUbigeo: [null,[Validators.required]],
        direcion: [null,[Validators.required]]
      })
  }

  ngOnInit(): void {
    console.log("title ==>", this.title);
    console.log("Provedor ==>", this.proveedor);

    this.myForm.patchValue(this.proveedor);

  }

  Guardar()
  {
    debugger;
    this.proveedorEnvio = this.myForm.getRawValue();
    switch(this.accion)
    {
      case AccionMantConst.crear:
        this.CrearRegistro();
        break;
      case AccionMantConst.editar:
        break;
      case AccionMantConst.eliminar:
        break;
    }
  }
  
CrearRegistro()
{
  debugger;
  this.proveedorService.Create(this.proveedorEnvio).subscribe(
    {
      next:(data:ResponseVWProvedor)=>
      {
        alert("Message");
      },
      error:()=>
      {
        alert("Erro");
      },
      complete:()=>
      {
        this.cerrarModal(true);
      }
    }
  )
}

  cerrarModal(res: boolean) {
    //true ==> hubo modificación en base de datos ==> necesito volver a cargar la lista
    //false ==> NO hubo modificación en base de datos ==> NOOOOOO necesito volver a cargar la lista
    this.closeModalEmmit.emit(res);

  }

}
