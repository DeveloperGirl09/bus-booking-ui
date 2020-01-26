import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { CitiesListComponent } from "./cities-list/cities-list.component";
import { ResultComponent } from "./result/result.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { CustomerLoginComponent } from "./customer-login/customer-login.component";
import { ViewBusDetailsComponent } from "./view-bus-details/view-bus-details.component";
import { ViewSingleBusDetailsComponent } from "./view-single-bus-details/view-single-bus-details.component";
import { BookNowComponent } from "./book-now/book-now.component";
const routes: Routes = [
  {
    path: "list",
    component: ListComponent
  },
  {
    path: "homepage",
    component: HomePageComponent
  },
  {
    path: "customerlogin",
    component: CustomerLoginComponent
  },
  {
    path: "busdetails",
    component: ViewBusDetailsComponent
  },
  {
    path: "busdetails/:busid",
    component: ViewSingleBusDetailsComponent
  },
  {
    path: "booknow/:busid/seat/:seatno",
    component: BookNowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule {}
