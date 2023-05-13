import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ThemeService {
  theme? : string;

  update(className: string){ this.theme = className; }
}
