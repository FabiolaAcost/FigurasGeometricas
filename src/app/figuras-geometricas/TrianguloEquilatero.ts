import { FiguraGeometrica } from './FiguraGeometrica';

export class TrianguloEquilatero extends FiguraGeometrica {
  lado: number;

  constructor(lado: number) {
    super('Triángulo Equilátero');
    this.lado = lado;
  }

  calcularPerimetro(): number {
    return 3 * this.lado;
  }
}