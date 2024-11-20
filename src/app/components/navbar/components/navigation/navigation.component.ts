import { TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

const MATERIAL_MODULES = [MatIconModule, MatListModule];

@Component({
  selector: 'portfolio-navigation',
  imports: [MATERIAL_MODULES, RouterLink, RouterLinkActive, TitleCasePipe],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  private readonly router = inject(Router);
  readonly options = { exact: true };
  readonly menu = this.router.config
    .filter(route => route.data?.['navigation'])
    .map(({ path, data }) => Object.assign({ path }, data?.['navigation']));
}
