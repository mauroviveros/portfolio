import { NgModule } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatTooltipModule } from "@angular/material/tooltip";


import { loadSvgResources } from "src/assets/icons";

@NgModule({
  exports: [
    MatIconModule,
    MatListModule,
    MatTooltipModule
  ]
})
export class SharedModule { 
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer){
    loadSvgResources(matIconRegistry, domSanitizer);
  }
}
