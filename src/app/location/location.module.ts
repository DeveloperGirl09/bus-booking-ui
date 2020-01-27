import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { LocationRoutingModule } from "./location-routing.module";
import { ListComponent } from "./list/list.component";
import { CitiesListComponent } from "./cities-list/cities-list.component";
import { ResultComponent } from "./result/result.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { CustomerLoginComponent } from "./customer-login/customer-login.component";
import { ViewBusDetailsComponent } from "./view-bus-details/view-bus-details.component";
import { ViewSingleBusDetailsComponent } from "./view-single-bus-details/view-single-bus-details.component";
import { BookNowComponent } from "./book-now/book-now.component";
import { SuccessBookingComponent } from "./success-booking/success-booking.component";
import { NavComponent } from "./nav/nav.component";
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';

@NgModule({
  declarations: [
    ListComponent,
    CitiesListComponent,
    ResultComponent,
    HomePageComponent,
    CustomerLoginComponent,
    ViewBusDetailsComponent,
    ViewSingleBusDetailsComponent,
    BookNowComponent,
    SuccessBookingComponent,
    NavComponent,
    CustomerRegistrationComponent
  ],
  imports: [
    CommonModule,
    LocationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [NavComponent]
})
export class LocationModule {}
