import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CV } from '../../../environments/cv';
import { LowerCasePipe, TitleCasePipe } from '@angular/common';
import * as icons from 'simple-icons';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'portfolio-social-links',
  standalone: true,
  imports: [LowerCasePipe, MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './social-links.component.html',
  styleUrl: './social-links.component.scss'
})
export class SocialLinksComponent {
  private readonly iconRegistry = inject(MatIconRegistry);
  private readonly sanitizer = inject(DomSanitizer);

  readonly socials = CV.basics.profiles;

  constructor(){
    this.iconRegistry.addSvgIconLiteral("instagram", this.sanitizer.bypassSecurityTrustHtml(icons.siInstagram.svg));
    this.iconRegistry.addSvgIconLiteral("linkedin", this.sanitizer.bypassSecurityTrustHtml(icons.siLinkedin.svg));
    this.iconRegistry.addSvgIconLiteral("github", this.sanitizer.bypassSecurityTrustHtml(icons.siGithub.svg));
  }
}
