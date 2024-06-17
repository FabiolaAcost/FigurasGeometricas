import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TrianguloEscaleno } from '../TrianguloEscaleno';
import { IonSelect, IonSelectOption, IonImg, IonItem, IonCard, IonCardTitle, IonCardHeader, IonCardSubtitle, IonCardContent, IonList, IonInput, IonLabel, IonButton, IonContent, IonHeader } from '@ionic/angular/standalone';

@Component({
  selector: 'app-triagulo',
  standalone: true,
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  imports: [FormsModule, IonContent, IonList, IonItem, IonSelect, IonSelectOption, IonCard, IonCardTitle, IonCardHeader,IonCardSubtitle,IonCardContent, IonImg, IonInput, IonLabel, IonButton, IonHeader]
})
export class TrianguloComponent  {
  selectedFigure: string = 'triangulo';
  ladoA: number = 0; 
  ladoB: number = 0;
  ladoC: number = 0;
  resultado: string | null = null; 

  constructor(private router: Router) { }

  calcularPerimetro(): void {
    const triangulo = new TrianguloEscaleno(this.ladoA, this.ladoB, this.ladoC);
    let perimetro = triangulo.calcularPerimetro();
    this.resultado = `El perímetro es ${perimetro} cm`;
  }

  onFigureChange(event: any) {
     this.selectedFigure = event.detail.value;
     
    if (this.selectedFigure === 'circulo') {
      this.router.navigate(['/circulo']);
      this.selectedFigure = 'circulo';
    }
    
  }
}
