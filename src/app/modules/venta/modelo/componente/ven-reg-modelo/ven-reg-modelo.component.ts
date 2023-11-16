import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResponseModelo } from 'src/app/models/Response/Venta/TB_Modelo/Response-Modelo';
import { RequestModelo } from 'src/app/modules/models/Ventas/TB_Modelo/Request-Modelo';
import { ModeloService } from '../../service/modelo.service';
import { AccionMantConst } from 'src/app/constants/general_constant';

@Component({
  selector: 'app-ven-reg-modelo',
  templateUrl: './ven-reg-modelo.component.html',
  styleUrls: ['./ven-reg-modelo.component.scss']
})
export class VenRegModeloComponent implements OnInit{
  //*Variable
  myForm: FormGroup;
  reqModelo: RequestModelo = new RequestModelo();
  //*recibir
  @Input() title: string = "";
  @Input() actionModal: number = 0;
  @Input() resModelo: ResponseModelo = new ResponseModelo();
  @Output() CloseModalEmitter = new EventEmitter<boolean>();
  //* Componente de vida
  ngOnInit(): void {
    this.myForm.patchValue(this.resModelo);
  }
  //*Constructor
  constructor(private fb:FormBuilder,
              private modeloService: ModeloService){
    this.myForm = this.fb.group({
      idModelo: [{value: "", disabled: true},[Validators.required]],
      nombreModelo: [null,[Validators.required]],
      codigoModelo: [null,[Validators.required]],
      descripcion: [null,[Validators.required]]
    });
  }
  //*Metodos Crud
  Guardar(){
    this.reqModelo = this.myForm.getRawValue();
    switch(this.actionModal)
    {
      case AccionMantConst.crear:
        this.CrearModelo();
        break;
      case AccionMantConst.editar:
        this.EditarModelo();
        break;
    }
  }
  CrearModelo(){
    this.modeloService.Create(this.reqModelo).subscribe(
      {
        next: (data: ResponseModelo)=> {
          alert("Modelo fue registrado")
        },
        error: (error)=> {alert(error.message)},
        complete: ()=> {this.CerrarModal(true)},
      }
    );
  }
  EditarModelo(){
    this.modeloService.Update(this.reqModelo).subscribe(
      {
        next: (data: ResponseModelo)=> {
          alert("Modelo fue actualizado")
        },
        error: (error)=> {alert(error.message)},
        complete: ()=> {this.CerrarModal(true)},
      }
    );
  }
  //* Metodos modal
  CerrarModal(res:boolean){
    this.CloseModalEmitter.emit(res);
  }

}
