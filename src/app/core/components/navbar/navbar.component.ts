import { Component } from "@angular/core";

interface MenuItem{
  title: string;
  icon: string;
  link: string;
}

@Component({
  selector: "core-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent {
  public profileURL = "https://avatars.githubusercontent.com/u/44076914";

  public socials: MenuItem[] = [
    { title: "Instagram", icon: "instagram", link: "https://www.instagram.com/maurogontier" },
    { title: "GitHub", icon: "github", link: "https://github.com/maurodviveros" },
    { title: "LinkedIn", icon: "linkedin", link: "https://www.linkedin.com/in/maurod-viveros" }
  ];
}
