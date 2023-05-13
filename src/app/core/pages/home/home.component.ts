import { Component, OnInit, inject } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { FabMenuItem } from "src/app/shared/interfaces/fab-menu";
import { ThemeService } from "src/app/shared/services/theme.service";


import { USER } from "src/environments/environment";

@Component({
  selector: "core-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  private theme = inject(ThemeService);
  private translate = inject(TranslateService);
  user = USER;

  langMenu: FabMenuItem[] = [
    { _id: "es", imgURL: "https://hatscripts.github.io/circle-flags/flags/es.svg" },
    { _id: "en", imgURL: "https://hatscripts.github.io/circle-flags/flags/uk.svg" }
  ];

  themeMenu: FabMenuItem[] = [
    { _id: "theme-primary", icon: "colorize", class: "theme-primary" },
    { _id: "theme-secondary", icon: "colorize", class: "theme-secondary" },
    { _id: "theme-tertiary", icon: "colorize", class: "theme-tertiary" }
  ]

  ngOnInit(){
    this._activeBrowserLang();
    this._easterEggCultureLang();
  }

  private _activeBrowserLang(){
    const browserLang = this.translate.getBrowserLang();
    this.langMenu.map(langItem => langItem.active = langItem._id === browserLang);
  }

  private _easterEggCultureLang(){
    const browserCultureLang = this.translate.getBrowserCultureLang();
    if(browserCultureLang === "es-AR") this.langMenu[0].imgURL = "https://hatscripts.github.io/circle-flags/flags/ar.svg";
    if(browserCultureLang === "en-US") this.langMenu[1].imgURL = "https://hatscripts.github.io/circle-flags/flags/us.svg";
  }

  updateLang(lang: string){
    this.translate.use(lang);
  }

  updateTheme(className: string){
    this.theme.update(className);
  }
}
