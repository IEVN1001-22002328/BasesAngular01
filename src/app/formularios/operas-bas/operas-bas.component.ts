import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.component.html',
  styleUrl: './operas-bas.component.css',
})
export class OperasBasComponent {
  num1: string = '';
  num2: string = '';
  resultado: number = 0;
  operacionSeleccionada: string = 'Suma';

  sumar():{
    this.resultado = parseInt(this.num1) + parseInt(this.num2);
  }

  restar():{
    this.resultado = parseInt(this.num1) - parseInt(this.num2);
  }

  multiplicar():{
    this.resultado = parseInt(this.num1) * parseInt(this.num2);
  }

  dividir():{
     this.resultado = parseInt(this.num1) / parseInt(this.num2);
  }

  calcular():{
    this.resultado
    }
  }