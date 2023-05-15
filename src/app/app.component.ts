import { Component, HostBinding, OnInit, inject } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { FabMenuItem } from "./shared/interfaces/fab-menu";

@Component({
  selector: "portfolio-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  private translate = inject(TranslateService);
  @HostBinding("class") themeClass? : string;

  langMenu: FabMenuItem[] = [
    { _id: "es", imgURL: "https://hatscripts.github.io/circle-flags/flags/ar.svg" },
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
    if(browserCultureLang === "en-US") this.langMenu[1].imgURL = "https://hatscripts.github.io/circle-flags/flags/us.svg";
  }

  updateLang(lang: string){ this.translate.use(lang); }
  updateTheme(className: string){ this.themeClass = className; }
}
