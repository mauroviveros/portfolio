import { Component } from "@angular/core";
import { USER } from "src/environments/environment";

@Component({
  selector: "core-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {
  user = USER;
}
