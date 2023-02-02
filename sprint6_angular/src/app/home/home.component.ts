import { Component } from '@angular/core';
import * as frases from '../../app/frases.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {  
  isOn: boolean = false;
  frases = frases;
  constructor (){
    console.log(this.frases.frases);
  }
  
}
