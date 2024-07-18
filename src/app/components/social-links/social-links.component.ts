import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CV } from '../../../environments/cv';
import { TitleCasePipe } from '@angular/common';
import * as icons from 'simple-icons';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'portfolio-social-links',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './social-links.component.html',
  styleUrl: './social-links.component.scss',
  providers: [TitleCasePipe]
})
export class SocialLinksComponent {
  private readonly iconRegistry = inject(MatIconRegistry);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly titleCase = inject(TitleCasePipe);
  readonly socials = CV.basics.profiles;

  constructor(){
    this.socials.forEach(social => {
      const iconName = `si${this.titleCase.transform(social.network)}` as keyof typeof icons;
      const icon : icons.SimpleIcon | undefined = icons[iconName];
      if(!icon) return;
      this.iconRegistry.addSvgIconLiteral(
        social.network,
        this.sanitizer.bypassSecurityTrustHtml(icon.svg)
      );
    });
  }
}
