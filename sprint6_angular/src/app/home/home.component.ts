import { Component } from '@angular/core';
import * as frases from '../../app/frases.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {  
  frases = frases;
  
  
}
