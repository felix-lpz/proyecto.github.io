import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AccionMantConst } from 'src/app/constants/general_constant';
import { ResponseArea } from 'src/app/models/Response/Produccion/Response-Area';
import { RequestArea } from 'src/app/modules/models/produccion/Request-Area';
import { AreaService } from '../../service/area.service';
import { MessageError, MessageSucess } from 'src/app/functions/Message_Fuctions';

@Component({
  selector: 'app-prod-registro-area',
  templateUrl: './prod-registro-area.component.html',
  styleUrls: ['./prod-registro-area.component.scss']
})
export class ProdRegistroAreaComponent implements OnInit {
   @Input() title:string = "";
   @Input() actionModal: number = 0;
   @Input() reponseArea:ResponseArea = new ResponseArea();
   @Output() closeModalEmmit = new EventEmitter<boolean>();
   
   myForm: FormGroup;
   requestArea: RequestArea = new RequestArea();

   constructor(private fb:FormBuilder,
              private serviceArea: AreaService){
    this.myForm = this.fb.group({

    })
   }
  ngOnInit(): void {
    this.myForm.patchValue(this.reponseArea)
  }
   Guardar(){
    this.requestArea = this.myForm.getRawValue();
    switch(this.actionModal)
    {
      case AccionMantConst.crear:
        this.CrearArea();
        break;
      case AccionMantConst.editar:
        this.EditarArea();
        break;
    }
   }
   CrearArea(){
    this.serviceArea.Create(this.requestArea).subscribe({
      next: (data: ResponseArea)=>{
        MessageSucess();
      },
      error: (erro) => {MessageError();},
      complete: ()=>{this.cerrarModal(true);}
    })
   }
   EditarArea(){
    this.serviceArea.Update(this.requestArea).subscribe({
      next: (data: ResponseArea)=>{
        MessageSucess();
      },
      error: (erro) => {MessageError();},
      complete: ()=>{this.cerrarModal(true);}
    })
   }
   cerrarModal(res:boolean){
    this.closeModalEmmit.emit(res);
   }
}
