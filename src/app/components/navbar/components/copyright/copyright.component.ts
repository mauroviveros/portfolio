import { Component } from '@angular/core';

@Component({
  selector: 'portfolio-copyright',
  imports: [],
  templateUrl: './copyright.component.html',
  styleUrl: './copyright.component.scss',
})
export class CopyrightComponent {
  readonly copyright = {
    year: 2022,
    owner: 'MAURO DANIEL VIVEROS',
    website: 'https://github.com/mauroviveros',
  };
}
