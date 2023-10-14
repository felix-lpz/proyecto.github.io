import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RequestLogin } from '../../models/request-login.models';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { ResponseLogin } from 'src/app/models/Response-loguin.model';
import Swal from 'sweetalert2';

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
        Usuario: [null,[Validators.required]],
        Password: [null, [Validators.required]]
      });
    }
    Login(){
      debugger;
      console.log(this.FormLogin.getRawValue())
      this.RequestLogin = this.FormLogin.getRawValue();
      this.loginServie.Login(this.RequestLogin).subscribe({
        next: (data:ResponseLogin) =>{
          console.log(data);
          alert("Loguin Correcto");
          this.router.navigate(["dashboard"])
          if(data.success)
          {
            sessionStorage.setItem("token",data.token);
          }
          else{
            return;
          }
        },
        error: (err) => { alert("Usuaro y Contraseña Incorrecto")},
        complete: () => { alert("Usuario Ingreso")}
      });

    }
    ShowModal(){
      Swal.fire('SweetAlert2 is working!');
    }
}

