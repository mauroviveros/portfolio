import { Component, OnInit, inject } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { FabMenuItem } from "src/app/shared/interfaces/fab-menu";


import { USER } from "src/environments/environment";

@Component({
  selector: "core-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  private translate = inject(TranslateService);
  user = USER;
  langMenu: FabMenuItem[] = [
    {
      _id: "es",
      imgURL: "https://hatscripts.github.io/circle-flags/flags/es.svg",
    },
    {
      _id: "en",
      imgURL: "https://hatscripts.github.io/circle-flags/flags/uk.svg"
    }
  ];

  ngOnInit(){
    this._activeBrowserLang();
  }

  private _activeBrowserLang(){
    const browserLang = this.translate.getBrowserLang();
    this.langMenu.map(langItem => langItem.active = langItem._id === browserLang);
  }

  updateLang(lang: string){
    this.translate.use(lang);
  }
}
