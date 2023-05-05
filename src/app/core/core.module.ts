import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoreRoutingModule } from "./core.routing";
import { TranslateModule } from "@ngx-translate/core";
import { SharedModule } from "../shared/shared.module";

import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./pages/home/home.component";



@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    TranslateModule.forChild(),
    SharedModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
