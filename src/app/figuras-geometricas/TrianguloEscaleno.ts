import { FiguraGeometrica } from './FiguraGeometrica';

export class TrianguloEscaleno extends FiguraGeometrica {
  ladoA: number;
  ladoB: number;
  ladoC: number;

  constructor(ladoA: number, ladoB: number, ladoC: number) {
    super('Triángulo Escaleno');
    this.ladoA = Number(ladoA);
    this.ladoB = Number(ladoB);
    this.ladoC = Number(ladoC);
  }

  calcularPerimetro(): number {
    return this.ladoA + this.ladoB  + this.ladoC;
  }
}