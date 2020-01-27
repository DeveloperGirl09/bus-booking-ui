import { Component, OnInit } from "@angular/core";

import { Router, ActivatedRoute } from "@angular/router";
import { LocationService } from "../location.service";
import { BusDetails } from "../view-bus-details/busDetails.model";
import { Booking } from "./booking.model";

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
  enablePriceDeduction: boolean;
  bookingPrice;
  enableCoupon: boolean;
  bookingDetails: Booking;

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
        if (data.length !== 0) {
          this.enableCoupon = true;
        } else {
          this.enableCoupon = false;
        }
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
      },
      err => {
        console.log(err);
      }
    );
  }
  checkCoupon(coupon, price) {
    if (
      this.couponDetails[0].couponName === coupon.value &&
      this.couponDetails[0].priceLimit <= price
    ) {
      this.busDetails.couponApply = true;
      this.priceDeduction = this.couponDetails[0].amountToDeduct;
      this.bookingPrice = this.busDetails.price - this.priceDeduction;
    } else {
      this.busDetails.couponApply = false;
      this.bookingPrice = this.busDetails.price;
    }
  }
  createBooking() {
    console.log("create booking");
    this.bookingDetails = new Booking();
    this.bookingDetails.busDetails = this.busDetails.busDetails;
    this.bookingDetails.busId = this.busId;
    this.bookingDetails.couponId = this.couponDetails[0]._id;
    this.bookingDetails.couponName = this.couponDetails[0].couponName;
    this.bookingDetails.customerEmailID = this.customerDetails.emailId;
    this.bookingDetails.customerId = this.customerId;
    this.bookingDetails.seatNo = this.seatNo;
    this.bookingDetails.price = this.bookingPrice;
    this.bookingDetails.amountDeducted = this.priceDeduction;
    this.locationService.createBooking(this.bookingDetails).subscribe(
      data => {
        this.router.navigate(["/success", data._id]);
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }
}
