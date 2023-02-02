import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss']
})
export class EscenaComponent implements OnInit{
  @Input() data: any =  [];

  selected: number = 0;

  constructor(){

  }
  ngOnInit():void{
    console.log(this.data);
  }
  prev(){
    if (this.selected > 0) {
      this.selected--;
   }
  }
  next(){
    if (this.selected < this.data.length - 1) {
      this.selected++;
  }
  }


}
