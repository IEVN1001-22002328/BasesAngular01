import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {
  name: string = '';
  cant: number = 0;
  cantp: number = 0; 
  resultado: number = 0;
  tarjetaCineco: string = 'no';
  mostrarResultados: boolean = false;

  calcular(): void {
    const precioBoleto = 12;
    let costoTotal = 0;

    if (this.cant > (this.cantp * 7)) {
      this.resultado = 0;
      alert("no puedes compar mas de 7 boletos por persona");
      this.mostrarResultados = false;
      return;
    }

    costoTotal = this.cant * precioBoleto;

    if (this.cant > 5) {
      costoTotal *= 0.85; 
    } else if (this.cant >= 3 && this.cant <= 5) {
      costoTotal *= 0.90; 
    }

    if (this.tarjetaCineco === 'si') {
      costoTotal *= 0.90; 
    }

    this.resultado = parseFloat(costoTotal.toFixed(2));
    this.mostrarResultados = true;
  }
}