import { HttpClient } from "@angular/common/http";
import { Component, OnInit, inject } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "core-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  private http = inject(HttpClient);
  private translate = inject(TranslateService);
  markdown?: string;

  ngOnInit(){
    const lang = this.translate.currentLang === "es" ? "es" : "en";
    this.http.get(`assets/markdown/about-${lang}.md`, { responseType: "text" }).subscribe(data => {
      this.markdown = data;
    })
  }
}
