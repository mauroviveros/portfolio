import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoreRoutingModule } from "./core.routing";
import { TranslateModule } from "@ngx-translate/core";
import { SharedModule } from "../shared/shared.module";

import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { NavbarMenuComponent } from "./components/navbar-menu/navbar-menu.component";



@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    NavbarMenuComponent
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
