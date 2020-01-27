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
import { SuccessBookingComponent } from "./success-booking/success-booking.component";
import { CustomerRegistrationComponent } from "./customer-registration/customer-registration.component";
import { AdminLoginComponent } from "./admin-login/admin-login.component";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { CreateBusDetailsComponent } from "./create-bus-details/create-bus-details.component";
import { CreateCouponComponent } from "./create-coupon/create-coupon.component";
import { ViewBusComponent } from "./view-bus/view-bus.component";
import { ViewCouponComponent } from "./view-coupon/view-coupon.component";
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
  },
  {
    path: "success/:booking",
    component: SuccessBookingComponent
  },
  {
    path: "registration",
    component: CustomerRegistrationComponent
  },
  {
    path: "admindashboard",
    component: AdminDashboardComponent
  },
  {
    path: "addbusdetails",
    component: CreateBusDetailsComponent
  },
  {
    path: "addcoupon",
    component: CreateCouponComponent
  },
  {
    path: "viewbus",
    component: ViewBusComponent
  },
  {
    path: "viewcoupon",
    component: ViewCouponComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule {}
