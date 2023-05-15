import { Component, OnDestroy, OnInit, inject } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { Subscription, filter } from "rxjs";

import { USER } from "src/environments/environment";

@Component({
  selector: "core-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit, OnDestroy {
  private subscription?: Subscription;
  private router = inject(Router);
  profileURL  = USER.profileURL;
  fullname    = `${USER.name.join(" ")} ${USER.surname.join(" ")}`;
  role        = USER.role;
  showNav     = false;


  ngOnInit(){
    this.subscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => { this.showNav = false; });
  }

  ngOnDestroy(){
    this.subscription?.unsubscribe();
  }
}
