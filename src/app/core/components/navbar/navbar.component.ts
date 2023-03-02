import { Component } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Subject, takeUntil } from "rxjs";

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
  private destroyed = new Subject<void>();


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

  public isDesktop = false;
  public isNavActive = false;

  constructor(
    private _breakpointObserver: BreakpointObserver
  ){
    this._breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => this.isDesktop = !result.matches);
  }

  public showNav(bool?: boolean): void{
    if(bool !== undefined) this.isNavActive = bool;
    else this.isNavActive = !this.isNavActive;
  }
}
