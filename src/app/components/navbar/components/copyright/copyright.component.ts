import { Component } from '@angular/core';

@Component({
  selector: 'portfolio-copyright',
  standalone: true,
  imports: [],
  templateUrl: './copyright.component.html',
  styleUrl: './copyright.component.scss',
})
export class CopyrightComponent {
  readonly copyright = {
    year: 2022,
    owner: 'Mauro Daniel Viveros',
    site: 'https://github.com/mauroviveros',
  };
}
