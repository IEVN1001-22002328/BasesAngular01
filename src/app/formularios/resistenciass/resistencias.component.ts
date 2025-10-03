import { Component } from '@angular/core';

class Resistencia {
  valor: number;
  valorMax: number;
  valorMin: number;

  constructor(b1: number, b2: number, multi: number, tole: number) {
    const base = (b1 * 10) + b2;
    this.valor = base * multi;
    const variacion = this.valor * tole;
    this.valorMax = this.valor + variacion;
    this.valorMin = this.valor - variacion;
  }
}

@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent {
  banda1: any = null;
  banda2: any = null;
  multi: any = null;
  tolerancia: any = null;

  resultado: Resistencia | null = null;

  colores = [
    { nombre: 'black', valor: 0 },
    { nombre: 'brown', valor: 1 },
    { nombre: 'red', valor: 2 },
    { nombre: 'orange', valor: 3 },
    { nombre: 'yellow', valor: 4 },
    { nombre: 'green', valor: 5 },
    { nombre: 'blue', valor: 6 },
    { nombre: 'purple', valor: 7 },
    { nombre: 'gray', valor: 8 },
    { nombre: 'white', valor: 9 }
  ];

  coloresMulti = [
    { nombre: 'black', multi: 1 },
    { nombre: 'brown', multi: 10 },
    { nombre: 'red', multi: 100 },
    { nombre: 'orange', multi: 1000 },
    { nombre: 'yellow', multi: 10000 },
    { nombre: 'green', multi: 100000 },
    { nombre: 'blue', multi: 1000000 },
    { nombre: 'purple', multi: 10000000 },
    { nombre: 'gray', multi: 100000000 },
    { nombre: 'white', multi: 1000000000 }
  ];

  coloresTole = [
    { nombre: 'gold', valor: 0.05, tole: 'Dorado 5%' },
    { nombre: 'silver', valor: 0.10, tole: 'Plata 10%' }
  ];

  calcular() {
    if (this.banda1 && this.banda2 && this.multi && this.tolerancia) {
      this.resultado = new Resistencia(
        this.banda1.valor,
        this.banda2.valor,
        this.multi.multi,
        this.tolerancia.valor
      );
    } else {
      alert('Por favor selecciona todas las bandas y la tolerancia');
    }
  }
}
