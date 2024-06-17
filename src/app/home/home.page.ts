import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonTitle, IonToolbar, IonHeader, IonSelect, IonItem,  IonSelectOption, IonList, IonContent, IonLabel } from '@ionic/angular/standalone';
import { CirculoComponent } from '../figuras-geometricas/circulo/circulo.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ IonLabel, IonContent, IonHeader, IonToolbar, IonTitle, FormsModule, CommonModule, IonSelect, IonItem, IonList, IonSelectOption, CirculoComponent],
})
export class HomePage {
  selectedFigure: string = '';
  
  constructor(private router: Router) {}
 
  onFigureChange(event: any) {
    this.selectedFigure = event.detail.value;
    if (this.selectedFigure === 'circulo') {
      this.router.navigate(['/circulo']);
    } else if (this.selectedFigure === 'triangulo') {
      this.router.navigate(['/triangulo']);
    }
  }
}