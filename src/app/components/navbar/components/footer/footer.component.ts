import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'portfolio-footer',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly copyright = {
    year: 2022,
    owner: 'Mauro Daniel Viveros',
    site: 'https://github.com/mauroviveros',
  };
}
