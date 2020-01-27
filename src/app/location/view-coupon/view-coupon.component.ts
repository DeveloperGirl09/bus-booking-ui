import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LocationService } from "../location.service";

@Component({
  selector: "app-view-coupon",
  templateUrl: "./view-coupon.component.html",
  styleUrls: ["./view-coupon.component.css"]
})
export class ViewCouponComponent implements OnInit {
  couponDetails;
  addCoupon: boolean;
  constructor(
    private locationService: LocationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAllCouponDetails();
  }
  getAllCouponDetails() {
    this.locationService.getCoupon().subscribe(
      data => {
        this.couponDetails = data;
        if (data.length === 0 || undefined) {
          this.addCoupon = true;
        } else {
          this.addCoupon = false;
        }
      },
      err => {
        console.log(err);
      }
    );
  }
  addNewCoupon() {
    this.router.navigate(["/test/addcoupon"]);
  }
}
