import { Component, EventEmitter, Input, Output } from "@angular/core";
import { animate, state, style, transition, trigger } from "@angular/animations";

import { FabMenuItem } from "../../interfaces/fab-menu";

@Component({
  selector: "shared-fab-menu",
  templateUrl: "./fab-menu.component.html",
  styleUrls: ["./fab-menu.component.scss"],
  animations: [
    trigger("rotate", [
      state("false", style({ transform: "rotate(0)" })),
      state("true", style({ transform: "rotate(360deg)", width: "2.5rem", height: "2.5rem" })),
      transition("false <=> true", animate("0.3s ease"))
    ]),
    trigger("height", [
      state("false", style({ "max-height": 0 })),
      state("true", style({ "max-height": "100vh" })),
      transition("false <=> true", animate("0.3s ease"))
    ])
  ]
})
export class FabMenuComponent {
  @Input() icon = "add";
  @Input() options: FabMenuItem[] = [];
  @Output() selected = new EventEmitter<string>();
  active = false;

  toggle(bool?: boolean){ this.active = bool ? bool : !this.active; }

  select(option: FabMenuItem){
    this.options.map(o => o.active = o === option);
    this.selected.emit(option._id);
    this.toggle(false);
  }
}
