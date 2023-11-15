import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RequestLogin } from '../../models/request-login.models';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { ResponseLogin } from 'src/app/models/Response-loguin.model';

import { MessageAlert } from 'src/app/functions/Message_Fuctions';
import { ResponseVWUsuario } from 'src/app/models/Response/Sistema/Response-VW-Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  FormLogin: FormGroup;
  RequestLogin: RequestLogin = new RequestLogin();
  constructor(private fb:FormBuilder, private loginServie: LoginService,
    private router: Router){
      this.FormLogin = this.fb.group({
        usuario: [null,[Validators.required]],
        password: [null, [Validators.required]]
      });
    }
    Login(){
      this.RequestLogin = this.FormLogin.getRawValue();
      this.loginServie.Login(this.RequestLogin).subscribe({
        next: (data:ResponseLogin) =>{
          if(data.success)
          {
            //alert("Loguin Correcto");
            sessionStorage.setItem("token",data.token);
            //sessionStorage.setItem("nombreRol",data.vWUsuario.nombreRol);
            this.router.navigate(["dashboard"]);
            MessageAlert();
          }
          else{
            return;
          }
        },
        error: (err) => { },
        complete: () => { }
      });

    }
    
}

