import { NgModule } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";

import { PageTitleComponent } from "./components/page-title/page-title.component";

@NgModule({
  exports: [
    MatBottomSheetModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatTooltipModule,
    PageTitleComponent
  ],
  declarations: [
    PageTitleComponent
  ]
})
export class SharedModule { 
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer){
    matIconRegistry.addSvgIcon("github", domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/socials/github.svg"));
    matIconRegistry.addSvgIcon("instagram", domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/socials/instagram.svg"));
    matIconRegistry.addSvgIcon("linkedin", domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/socials/linkedin.svg"));
  }
}
