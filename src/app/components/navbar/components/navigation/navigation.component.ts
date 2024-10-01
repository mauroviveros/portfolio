import { Component, inject } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'portfolio-navigation',
  standalone: true,
  imports: [
    MatIconModule,
    MatListModule,
    RouterLink,
    RouterLinkActive,
    TitleCasePipe,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  private readonly router = inject(Router);

  readonly options = { exact: true };
  readonly menu = this.router.config.map(route => {
    return Object.assign({ path: route.path }, route.data?.['navigation']);
  });
}
