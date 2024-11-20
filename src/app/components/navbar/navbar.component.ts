import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';

const MATERIAL_MODULES = [MatToolbarModule, MatIconModule, MatButtonModule];

@Component({
  selector: 'portfolio-navbar',
  imports: [
    MATERIAL_MODULES,
    CopyrightComponent,
    HeaderComponent,
    NavigationComponent,
    SocialLinksComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  active = false;
}
