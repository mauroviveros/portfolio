import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';

@Component({
  selector: 'portfolio-navbar',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    SocialLinksComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {}
