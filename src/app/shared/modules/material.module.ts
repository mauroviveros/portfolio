import { NgModule } from "@angular/core";

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { DomSanitizer } from "@angular/platform-browser";


@NgModule({
  declarations: [],
  imports: [],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule
  ]
})
export class MaterialModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer){
    matIconRegistry.addSvgIcon("instagram", domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/socials/instagram.svg"));
    matIconRegistry.addSvgIcon("linkedin", domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/socials/linkedin.svg"));
    matIconRegistry.addSvgIcon("github", domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/socials/github.svg"));
  }
}
