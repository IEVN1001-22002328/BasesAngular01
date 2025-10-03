import { Component } from '@angular/core';
import { Distancia } from './distancia';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  x1: number = 0
  y1: number = 0
  x2: number = 0
  y2: number = 0
  resultado: number = 0

  calcularDistancia() {
    let d = new Distancia(this.x1, this.y1, this.x2, this.y2)
    this.resultado = d.calcular()
  }
}
