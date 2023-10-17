import { FactoryTarget } from '@angular/compiler';
import { Component } from '@angular/core';
import {faCookie,faCoffee} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  Icon = {
    faCookie: faCoffee,
    faCoffee: faCoffee
  };
}
