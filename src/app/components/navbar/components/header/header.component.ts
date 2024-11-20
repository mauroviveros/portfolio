import { Component } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { CV } from '@env/cv';

@Component({
  selector: 'portfolio-header',
  imports: [TitleCasePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly name = CV.basics.name;
  readonly picture = CV.basics.picture;
  readonly label = CV.basics.label;
}
