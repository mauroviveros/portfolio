import { Component, HostBinding, inject } from "@angular/core";
import { ThemeService } from "./shared/services/theme.service";

@Component({
  selector: "portfolio-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  private themeService = inject(ThemeService);

  @HostBinding("class") get className() { return this.themeService.theme; }
}
