import { Component } from '@angular/core';
import { Circulo } from '../Circulo';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonSelect, IonSelectOption, IonImg, IonItem, IonCard, IonCardTitle, IonCardHeader, IonCardSubtitle, IonCardContent, IonList, IonInput, IonLabel, IonButton, IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-circulo',
  standalone: true,
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  imports: [IonTitle, IonToolbar,  IonSelect, IonSelectOption, IonHeader, IonContent, IonImg, FormsModule, IonItem, IonButton, IonLabel, IonInput, IonList, IonCardTitle, IonCard, IonCardHeader, IonCardSubtitle,IonCardContent]
})
export class CirculoComponent {
  radio: number = 0; 
  resultado: string | null = null; 
  selectedFigure: string = 'circulo';

  constructor(private router: Router) { }

 // Método para calcular el perímetro del círculo
 calcularPerimetro(): void {
  const circulo = new Circulo(this.radio); 
  const perimetro = circulo.calcularPerimetro();
  this.resultado = `El perímetro es ${perimetro.toFixed(2)} cm`; 
  }

  onFigureChange(event: any) {
    this.selectedFigure = event.detail.value;
     if (this.selectedFigure === 'triangulo') {
        this.router.navigate(['/triangulo']);
        this.selectedFigure = 'triangulo';
     }
    
   }
}
