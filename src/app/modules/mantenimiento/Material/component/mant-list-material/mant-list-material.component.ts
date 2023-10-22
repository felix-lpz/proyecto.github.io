import { Component, OnInit } from '@angular/core';
import { MaterialService } from "../../service/material.service";
import { ResponseMaterial } from 'src/app/models/Response/Compra/Response-Material';

@Component({
  selector: 'app-mant-list-material',
  templateUrl: './mant-list-material.component.html',
  styleUrls: ['./mant-list-material.component.scss']
})
export class MantListMaterialComponent implements OnInit {
  material: ResponseMaterial[] = [];
  constructor(private materilService:MaterialService){}
  ngOnInit(): void {
    this.ListaMaterial();
  }
  ListaMaterial()
  {
    debugger;
    this.materilService.GetAll().subscribe({
      next: (data:ResponseMaterial[])=>{
        this.material = data;
      },
      error:(errr)=>
      {
        console.log(errr)
      },
      complete:()=>{}
      
    });
  }
}
