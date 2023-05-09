import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "./modules/material.module";
import { FabMenuComponent } from "./components/fab-menu/fab-menu.component";



@NgModule({
  declarations: [
    FabMenuComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    FabMenuComponent,
    MaterialModule
  ]
})
export class SharedModule { }
