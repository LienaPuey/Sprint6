import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss']
})
export class EscenaComponent {
  @Input() data: { frases: any[] }={ frases: [] };

  selected: number = 0;
  prev(){
    if (this.selected > 0) {
      this.selected--;
   }
  }
  next(){
    if (this.selected < this.data.frases.length - 1) {
        this.selected++;
    }
  }
}
