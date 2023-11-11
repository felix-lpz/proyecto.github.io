import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ResponseVWProvedor } from 'src/app/models/Response/Compra/Response_VW_Provedor';
import { ResponseVWEmpleado } from 'src/app/models/Response/Produccion/tb-empleado/Reponse-Vw-Empleado';
import { ResponseEmpleado } from 'src/app/models/Response/Produccion/tb-empleado/Response-Empleado';
import { EmpleadoService } from '../../service/empleado.service';
import { AccionMantConst } from 'src/app/constants/general_constant';

@Component({
  selector: 'app-prod-list-emp',
  templateUrl: './prod-list-emp.component.html',
  styleUrls: ['./prod-list-emp.component.scss']
})
export class ProdListEmpComponent implements OnInit {
  //*Declaracion de variables
  bsModalRef?:BsModalRef;
  titleModal: string = "";
  actionModal: number = 0;
  responseEmpleado: ResponseEmpleado[] = [];
  response: ResponseEmpleado = new ResponseEmpleado();
  responseVWEmpleado: ResponseVWEmpleado = new ResponseVWEmpleado();

  //*Constructor
  constructor(private servicebsModal:BsModalService,
    private serviceEmpleado: EmpleadoService){}

  //* Evento de carga
  ngOnInit(): void {
    this.ListarEmpleado();
  }

  //*Metodos de Crud
  ListarEmpleado(){
    this.serviceEmpleado.GetAll().subscribe({
      next:(data: ResponseEmpleado[])=>{
        this.responseEmpleado = data;
      },
      error:()=>{},
      complete:()=>{}
    });
  }
  CreateEmpleado(template: TemplateRef<any>){
    this.OpenModal(template);
    this.actionModal = AccionMantConst.crear;
    this.titleModal = "Crear nuevo empleado"
    this.response = new ResponseEmpleado();
  }
  EditarEmpleado(template: TemplateRef<any>,empleado: ResponseVWEmpleado){
    this.OpenModal(template);
    this.actionModal = AccionMantConst.editar;
    this.titleModal = "Actualizar nuevo empleado"
    this.responseVWEmpleado = empleado;
  }
  //*Metodos del modal
  OpenModal(template: TemplateRef<any>){
    this.bsModalRef = this.servicebsModal.show(template)
  }
  GetCloseModalEmmit(res: boolean){
    this.bsModalRef?.hide();
    if(res)
    {
      this.ListarEmpleado();
    }
  }
}
