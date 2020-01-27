import { Component, OnInit } from "@angular/core";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LocationService } from "../location.service";
import { BusDetails } from "../view-bus-details/busDetails.model";

@Component({
  selector: "app-create-bus-details",
  templateUrl: "./create-bus-details.component.html",
  styleUrls: ["./create-bus-details.component.css"]
})
export class CreateBusDetailsComponent implements OnInit {
  busForm: FormGroup;
  busDetailsModel: BusDetails;
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
    this.busForm = this.fb.group({
      busNumber: ["", Validators.required],
      price: ["", Validators.required],
      busDetails: ["", Validators.required],
      pickup: [""],
      destination: [""],
      couponApply: [""]
    });
  }
  createBus() {
    this.busDetailsModel = new BusDetails();
    this.busDetailsModel.busNumber = this.busForm.controls.busNumber.value;
    this.busDetailsModel.price = this.busForm.controls.price.value;
    this.busDetailsModel.busDetails = this.busForm.controls.busDetails.value;
    this.busDetailsModel.pickup = this.busForm.controls.pickup.value;
    this.busDetailsModel.destination = this.busForm.controls.destination.value;
    this.locationService.createBus(this.busDetailsModel).subscribe(
      data => {
        console.log(data);
        this.router.navigate(["/test/viewbus"]);
      },
      err => {
        console.log(err);
      }
    );
  }
}
