import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LocationService } from "../location.service";
import { Coupon } from "./coupon.model";

@Component({
  selector: "app-create-coupon",
  templateUrl: "./create-coupon.component.html",
  styleUrls: ["./create-coupon.component.css"]
})
export class CreateCouponComponent implements OnInit {
  couponForm: FormGroup;
  couponModel: Coupon;
  pwdError: boolean;
  constructor(
    private fb: FormBuilder,
    private locationService: LocationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.couponForm = this.fb.group({
      couponName: ["", Validators.required],
      couponDescription: ["", Validators.required],
      priceLimit: ["", Validators.required],
      amountToDeduct: [""]
    });
  }
  createCoupons() {
    this.couponModel = new Coupon();
    this.couponModel.couponName = this.couponForm.controls.couponName.value;
    this.couponModel.couponDescription = this.couponForm.controls.couponDescription.value;
    this.couponModel.priceLimit = this.couponForm.controls.priceLimit.value;
    this.couponModel.amountToDeduct = this.couponForm.controls.amountToDeduct.value;
    this.locationService.createCoupon(this.couponModel).subscribe(
      data => {
        console.log(data);
        this.router.navigate(["/test/viewcoupon"]);
      },
      err => {
        console.log(err);
      }
    );
  }
}
