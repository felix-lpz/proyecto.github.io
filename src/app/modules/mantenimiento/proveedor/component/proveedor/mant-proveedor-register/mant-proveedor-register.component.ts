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
  @Input() proveedor: ResponseVWProvedor = new ResponseVWProvedor();
  @Input() accion: number = 0;

  @Output() closeModalEmmit = new EventEmitter<boolean>();

  myForm: FormGroup;
  proveedorEnvio: RequestProveedor = new RequestProveedor();

  constructor(private fb: FormBuilder,
             private proveedorService:ProveedorService )
  {
    this.myForm = this.fb.group(
      {
        idProvedor: [{ value: 0, disabled: true }, [Validators.required]],
        nombrePersona: [null, [Validators.required]],
        tipoPersona: [null, [Validators.required]],
        tipoDocumento: [null, [Validators.required]],
        numerodocumento: [null, [Validators.required]],
        telefono: [null, [Validators.required]],
        codigoUbigeo: [null,[Validators.required]],
        direccion: [null,[Validators.required]]
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
        this.EditarRegistro();
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
        alert("se registro correctamente");
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
EditarRegistro()
{
  debugger;
  this.proveedorService.Update(this.proveedorEnvio).subscribe(
    {
      next:(data:ResponseVWProvedor)=>
      {
        alert("Se actualizo correctamente");
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
  );
}
  cerrarModal(res: boolean) {
    //true ==> hubo modificación en base de datos ==> necesito volver a cargar la lista
    //false ==> NO hubo modificación en base de datos ==> NOOOOOO necesito volver a cargar la lista
    this.closeModalEmmit.emit(res);

  }

}
