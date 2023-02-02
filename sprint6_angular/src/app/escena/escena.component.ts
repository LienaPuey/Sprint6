import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss']
})
export class EscenaComponent implements OnInit{
  @Input() data: any =  [];
  @Output() onChangeBgImg: EventEmitter<string> = new EventEmitter();

  selected: number = 0;

  constructor(){

  }
  ngOnInit():void{
    console.log(this.data);
  }
  prev(){
    if (this.selected > 0) {
      this.selected--;
      this.onChangeBgImg.emit(this.data[this.selected].img);
   }
  }
  next(){
    if (this.selected < this.data.length - 1) {
      this.selected++;
      this.onChangeBgImg.emit(this.data[this.selected].img);

      
  }
  }


}
