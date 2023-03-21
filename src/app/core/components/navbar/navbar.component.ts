import { Component } from "@angular/core";
import { IsActiveMatchOptions } from "@angular/router";

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
  public routerLinkActiveOptions: IsActiveMatchOptions = {
    paths: "exact",
    queryParams: "exact",
    fragment: "exact",
    matrixParams: "exact"
  };

  public routes = [
    { title: "Inicio", path: "", icon: "home" },
    { title: "skills", path: "skills", icon: "memory" },
  ];

  public profile = {
    imageURL: "https://avatars.githubusercontent.com/u/44076914",
    fullname: "Mauro Viveros",
    employment: "Web Fullstack - DevOps"
  };

  public socials: MenuItem[] = [
    { title: "Instagram", icon: "instagram", link: "https://www.instagram.com/maurogontier" },
    { title: "GitHub", icon: "github", link: "https://github.com/maurodviveros" },
    { title: "LinkedIn", icon: "linkedin", link: "https://www.linkedin.com/in/maurod-viveros" }
  ];
}
