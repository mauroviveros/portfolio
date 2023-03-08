import { Component, Input } from "@angular/core";

@Component({
  selector: "shared-page-title",
  templateUrl: "./page-title.component.html",
  styleUrls: ["./page-title.component.scss"]
})
export class PageTitleComponent {
  @Input() public text: string | undefined;
  @Input() public image: string | undefined;
}
