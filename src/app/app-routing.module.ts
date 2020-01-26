import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: "./home/home.module#HomeModule"
  },
  {
    path: "test",
    loadChildren: "./location/location.module#LocationModule"
  },
  {
    path: "",
    redirectTo: "/test/homepage",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
