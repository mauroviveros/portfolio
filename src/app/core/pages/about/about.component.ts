import { HttpClient } from "@angular/common/http";
import { Component, OnDestroy, OnInit, inject } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Subscription } from "rxjs";

interface Markdowns{
  [key: string]: string
}

@Component({
  selector: "core-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit, OnDestroy {
  private subscription?: Subscription;
  private http = inject(HttpClient);
  private translate = inject(TranslateService);
  lang = this.translate.currentLang === "es" ? "es" : "en";
  markdowns: Markdowns = {};

  ngOnInit(){
    this.getLangs();

    this.subscription = this.translate.onLangChange.asObservable().subscribe(({ lang }) => {
      this.lang = lang === "es" ? "es" : "en";
    })
  }
  ngOnDestroy(){
    this.subscription?.unsubscribe();
  }
  
  private getLangs(){
    this.translate.getLangs().forEach(lang => {
      this.http.get(`assets/markdown/about-${lang}.md`, { responseType: "text" }).subscribe(data => {
        this.markdowns[lang] = data;
      })
    });
  }
}
