import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LocationService } from "../location.service";
import { Customer } from "../customer-login/customer.model";

@Component({
  selector: "app-admin-login",
  templateUrl: "./admin-login.component.html",
  styleUrls: ["./admin-login.component.css"]
})
export class AdminLoginComponent implements OnInit {
  customerForm;
  pwdError;
  customerModel: Customer;
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
    this.locationService.adminValidate(this.customerModel).subscribe(
      data => {
        console.log(data);
        if (data.length === 0) {
          this.pwdError = true;
          sessionStorage.setItem("adminlogin", "false");
          sessionStorage.removeItem("customerId");
          sessionStorage.removeItem("emailId");
        } else {
          /* this.setCookie(data[0]._id); */
          sessionStorage.setItem("adminlogin", "true");
          this.router.navigate(["/test/admindashboard"]);
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
