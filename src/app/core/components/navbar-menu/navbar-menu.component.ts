import { Component, OnInit, inject } from "@angular/core";
import { Router } from "@angular/router";

import { USER } from "src/environments/environment";

interface Route{
  icon: string
  path: string
  text: string
}

@Component({
  selector: "core-navbar-menu",
  templateUrl: "./navbar-menu.component.html",
  styleUrls: ["./navbar-menu.component.scss"]
})
export class NavbarMenuComponent implements OnInit {
  private router = inject(Router);
  routes: Route[] = [];
  routerLinkOptions = { exact: true }
  user = USER;

  ngOnInit(){
    this.routes = this.router.config
      .filter(route => !!route.data && !!route.data["navigation"])
      .map(route => {
        const _route = route.data ? route.data["navigation"] : {};
        _route.path = route.path;
        return _route;
      })
  }
}
