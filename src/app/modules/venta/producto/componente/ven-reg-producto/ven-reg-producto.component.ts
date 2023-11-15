import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators,  } from '@angular/forms';
import { AccionMantConst } from 'src/app/constants/general_constant';
import { ResponseListProducto } from 'src/app/models/Response/Venta/TB_Producto/Response-List-Producto';
import { ResponseVWProducto } from 'src/app/models/Response/Venta/TB_Producto/Response-VW-Producto';
import { RequestVWProducto } from 'src/app/modules/models/Ventas/TB_Producto/Request-VW-Producto';
import { RequestVWEmpleado } from 'src/app/modules/models/produccion/tb-empleado/Request-Vw-Empleado';
import { ProductoService } from '../../service/producto.service';

@Component({
  selector: 'app-ven-reg-producto',
  templateUrl: './ven-reg-producto.component.html',
  styleUrls: ['./ven-reg-producto.component.scss']
})
export class VenRegProductoComponent implements OnInit{
  //* Informacion a recibir
  @Input() titleModal : string = "";
  @Input() actionModal : number = 0;
  @Input() resVWProducto : ResponseVWProducto = new ResponseVWProducto();
  @Input() listProducto: ResponseListProducto = new ResponseListProducto(); 
  //* Informacion a enviar
  @Output() CloseModalEmmit = new EventEmitter<boolean>();
  //* variables locales
  myForm: FormGroup;
  reqVWProducto: RequestVWProducto = new RequestVWProducto();

  //*Constructor
  constructor(private fb:FormBuilder,
              private prodcutoService: ProductoService){
    this.myForm = this.fb.group({
      idProducto: [{value: 0, disabled: true},[Validators.required]],
      nombreProd: [null,[Validators.required]],
      codigoProd: [null,[Validators.required]],
      precioUnitario: [null,[Validators.required]],
      nombreUnidad: [null,[Validators.required]],
      stock: [null,[Validators.required]],
      estadoProducto: [null,[Validators.required]],
      fotografia: [null]
    });
  }
  ngOnInit(): void {
    this.myForm.patchValue(this.listProducto);
  }

  //*Métodos del crud
  Guardar(){
    this.reqVWProducto = this.myForm.getRawValue();
    switch(this.actionModal){
      case AccionMantConst.crear:
        this.CrearProducto();
        break;
      case AccionMantConst.editar:
        this.EditarProducto();
        break;
    }
  }
  CrearProducto(){
    this.prodcutoService.Create(this.reqVWProducto).subscribe({
      next: (data: ResponseVWProducto)=>{
        alert(data.message);
      },
      error: ()=>{},
      complete: ()=>{},
    })
  }
  EditarProducto(){
    this.prodcutoService.Update(this.reqVWProducto).subscribe({
      next: (data: ResponseVWProducto)=>{
        alert(data.message);
      },
      error: ()=>{},
      complete: ()=>{},
    })
  }
  //* Métodos de modal
  CerrarModal(res: boolean){
    this.CloseModalEmmit.emit(res);
  }
}
