import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    data: {
      navigation: { icon: "home", text: "nav.home" }
    }
  },
  {
    path: "about",
    component: AboutComponent,
    data: {
      navigation: { icon: "badge", text: "nav.about" }
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
