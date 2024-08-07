import { Component } from '@angular/core';
import { CV } from '../../../environments/cv';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'portfolio-header',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly name = CV.basics.name;
  readonly picture = CV.basics.picture;
  readonly label = CV.basics.label;
}
