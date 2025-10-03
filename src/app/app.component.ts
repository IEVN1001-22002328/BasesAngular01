import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
})
export class AppComponent {
<<<<<<< HEAD
  title = 'SEBASTIAN GLEZ';
=======
  title = 'Sebastian Gonzalez';
>>>>>>> 34bb5e5c3de192f711c65053d899640758456c69

  duplicarNumero(valor: number): number {
    return valor * 2;
  }

  pelicula={
    titulo:"El padrino",
    anio:1972,
    genero:"Crimen/Drama"
  }
}