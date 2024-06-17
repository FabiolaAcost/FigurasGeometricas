import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'circulo',
    loadComponent: () => import('./figuras-geometricas/circulo/circulo.component').then((m) => m.CirculoComponent),
  },
  {
    path: 'triangulo',
    loadComponent: () => import('./figuras-geometricas/triangulo/triangulo.component').then((m) => m.TrianguloComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
