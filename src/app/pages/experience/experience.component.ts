import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
// import { CV } from '@env/cv';

@Component({
  selector: 'portfolio-experience',
  imports: [MatIconModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  // works = CV.work;
}
