import { Component, OnInit } from "@angular/core";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LocationService } from "../location.service";
import { Customer } from "../customer-login/customer.model";

@Component({
  selector: "app-customer-registration",
  templateUrl: "./customer-registration.component.html",
  styleUrls: ["./customer-registration.component.css"]
})
export class CustomerRegistrationComponent implements OnInit {
  customerForm: FormGroup;
  customerModel: Customer;
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
    this.customerForm = this.fb.group({
      emailId: ["", Validators.required],
      password: ["", Validators.required],
      mobileNumber: ["", Validators.required]
    });
  }
  customerRegistration() {
    this.customerModel = new Customer();
    this.customerModel.emailId = this.customerForm.controls.emailId.value;
    this.customerModel.password = this.customerForm.controls.password.value;
    this.locationService.createCustomer(this.customerModel).subscribe(
      data => {
        console.log(data);
        if (data.length === 0) {
          this.pwdError = true;
          sessionStorage.setItem("customerlogin", "false");
          sessionStorage.removeItem("customerId");
          sessionStorage.removeItem("emailId");
        } else {
          /* this.setCookie(data[0]._id); */
          sessionStorage.setItem("customerlogin", "true");
          sessionStorage.setItem("customerId", data.customerId);
          sessionStorage.setItem("emailId", data.emailId);
          this.router.navigate(["/test/busdetails"]);
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
