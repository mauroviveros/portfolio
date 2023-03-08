import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SkillsRoutingModule } from "./skills.routing";
import { SharedModule } from "src/app/shared/shared.module";

import { PageComponent } from "./pages/page/page.component";


@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    SharedModule
  ]
})
export class SkillsModule { }
