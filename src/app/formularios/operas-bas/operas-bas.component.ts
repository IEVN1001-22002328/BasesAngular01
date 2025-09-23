import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css'],
  standalone: false,
})
export class OperasBasComponent {
  num1: string = '';
  num2: string = '';
  resultado: number = 0;
  operacionSeleccionada: string = 'Suma';

  calcular() {
    const n1 = parseInt(this.num1);
    const n2 = parseInt(this.num2);

    const operaciones: { [key: string]: number } = {
      'Suma': n1 + n2,
      'Resta': n1 - n2,
      'Multiplicación': n1 * n2,
      'División': n2 !== 0 ? n1 / n2 : 0
    };

    this.resultado = operaciones[this.operacionSeleccionada] ?? 0;
  }
}
