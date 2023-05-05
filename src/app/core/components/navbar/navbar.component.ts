import { Component } from "@angular/core";

import { USER } from "src/environments/environment";

@Component({
  selector: "core-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent {
  profileURL  = USER.profileURL;
  fullname    = `${USER.name.join(" ")} ${USER.surname.join(" ")}`;
  role        = USER.role;
}
