import { Component, inject } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as icons from 'simple-icons';
import { CV } from '@env/cv';

const MATERIAL_MODULES = [MatButtonModule, MatIconModule, MatTooltipModule];

@Component({
  selector: 'portfolio-social-links',
  imports: [MATERIAL_MODULES],
  providers: [TitleCasePipe],
  templateUrl: './social-links.component.html',
  styleUrl: './social-links.component.scss',
})
export class SocialLinksComponent {
  private readonly iconRegistry = inject(MatIconRegistry);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly titleCase = inject(TitleCasePipe);
  readonly socials = CV.basics.profiles;

  constructor() {
    this.socials.forEach(social => {
      const iconName = `si${this.titleCase.transform(social.network)}`;
      const icon = icons[iconName as keyof typeof icons] as icons.SimpleIcon;
      const svg = this.sanitizer.bypassSecurityTrustHtml(icon.svg);
      if (icon) this.iconRegistry.addSvgIconLiteral(social.network, svg);
    });
  }
}
