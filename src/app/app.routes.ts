import { Routes } from '@angular/router';
import { HeroComponent } from './pages/hero/hero.component';
import { ExperienceComponent } from './pages/experience/experience.component';

export const routes: Routes = [
  {
    path: '',
    component: HeroComponent,
    data: {
      navigation: { icon: 'home', label: 'home' },
    },
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    data: {
      navigation: { icon: 'work', label: 'experience' },
    },
  },
];
