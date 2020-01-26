import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LocationService } from "../location.service";
import { Customer } from "./customer.model";

@Component({
  selector: "app-customer-login",
  templateUrl: "./customer-login.component.html",
  styleUrls: ["./customer-login.component.css"]
})
export class CustomerLoginComponent implements OnInit {
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
      password: ["", Validators.required]
    });
  }
  customerLogin() {
    this.customerModel = new Customer();
    this.customerModel.emailId = this.customerForm.controls.emailId.value;
    this.customerModel.password = this.customerForm.controls.password.value;
    this.locationService.customerValidate(this.customerModel).subscribe(
      data => {
        console.log(data);
        if (data.length === 0) {
          this.pwdError = true;
          sessionStorage.setItem("login", "false");
          sessionStorage.removeItem("customerId");
          sessionStorage.removeItem("emailId");
        } else {
          /* this.setCookie(data[0]._id); */
          sessionStorage.setItem("login", "true");
          sessionStorage.setItem("customerId", data[0].customerId);
          sessionStorage.setItem("emailId", data[0].emailId);
          this.router.navigate(["/test/busdetails"]);
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
