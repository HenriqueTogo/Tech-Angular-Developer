import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  produtos: string[] = [];
  menuType: string = 'superuser';

  constructor() {
    this.produtos = [
      'mouse',
      'teclado',
      'cabo',
      'fonte'
    ]
  }
  adicionar(){
    this.produtos.push('notebook');
  }
  remover(index: number) {
    this.produtos.splice(index, 1)
  }
}
