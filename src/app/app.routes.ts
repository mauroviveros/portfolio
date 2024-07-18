import { Routes } from '@angular/router';
import { HeroComponent } from './pages/hero/hero.component';

export const routes: Routes = [
  {
    path: '',
    component: HeroComponent,
    data: {
      navigation: { icon: 'home', label: 'home' },
    },
  },
  {
    path: '',
  },
];
