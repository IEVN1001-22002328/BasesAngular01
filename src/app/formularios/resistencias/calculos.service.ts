export class Resistencia {
  valor: number;
  valorMax: number;
  valorMin: number;

  constructor(
    private banda1: number,
    private banda2: number,
    private multiplicador: number,
    private tolerancia: number
  ) {
    const base = (banda1 * 10) + banda2;
    this.valor = base * multiplicador;
    const variacion = this.valor * tolerancia;
    this.valorMax = this.valor + variacion;
    this.valorMin = this.valor - variacion;
  }
}
