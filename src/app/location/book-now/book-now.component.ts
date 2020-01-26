import { Component, OnInit } from "@angular/core";

import { Router, ActivatedRoute } from "@angular/router";
import { LocationService } from "../location.service";
import { BusDetails } from "../view-bus-details/busDetails.model";

@Component({
  selector: "app-book-now",
  templateUrl: "./book-now.component.html",
  styleUrls: ["./book-now.component.css"]
})
export class BookNowComponent implements OnInit {
  busId;
  seatNo;
  customerId;
  customerDetails;
  busDetails;
  couponDetails;
  priceDeduction;
  deductedPrice;
  constructor(
    private locationService: LocationService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.busId = this.activateRoute.snapshot.paramMap.get("busid");
    this.seatNo = this.activateRoute.snapshot.paramMap.get("seatno");
    this.customerId = sessionStorage.getItem("customerId");
  }

  ngOnInit() {
    this.getBusDetails();
    this.getCouponDetails();
    this.getCustomerDetails();
  }
  getCustomerDetails() {
    this.locationService.getSingleCustomerDetails(this.customerId).subscribe(
      data => {
        this.customerDetails = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  getCouponDetails() {
    this.locationService.getCoupon().subscribe(
      data => {
        this.couponDetails = data;
        console.log(data, "coupon");
      },
      err => {
        console.log(err);
      }
    );
  }
  getBusDetails() {
    this.locationService.getSingleBusDetails(this.busId).subscribe(
      data => {
        this.busDetails = data;
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }
  checkCoupon(coupon, price) {
    console.log("coupon", coupon.value);
    console.log("price", price);
    this.couponDetails.forEach(element => {
      console.log(element, "coupon");
      if (element.couponName === coupon.value && element.priceLimit <= price) {
        this.priceDeduction = element.amountToDeduct;
        console.log(this.priceDeduction);
      } else {
        /* this.priceDeduction = 0; */
      }
    });
  }
}
