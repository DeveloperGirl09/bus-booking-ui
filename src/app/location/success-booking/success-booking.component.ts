import { Component, OnInit } from "@angular/core";
import { LocationService } from "../location.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Invoice } from "./invoice.model";

@Component({
  selector: "app-success-booking",
  templateUrl: "./success-booking.component.html",
  styleUrls: ["./success-booking.component.css"]
})
export class SuccessBookingComponent implements OnInit {
  bookingId;
  invoice: Invoice;
  bookingDetails;
  constructor(
    private locationService: LocationService,
    private activatedRoute: ActivatedRoute
  ) {
    this.bookingId = this.activatedRoute.snapshot.paramMap.get("booking");
  }

  ngOnInit() {
    this.getSingleBookings();
  }
  getSingleBookings() {
    this.locationService.getSingleBookings(this.bookingId).subscribe(
      data => {
        this.bookingDetails = data;
        console.log(data);
        this.sendInvoice();
      },
      err => {
        console.log(err);
      }
    );
  }
  sendInvoice() {
    this.invoice = new Invoice();
    this.invoice.customerEmailId = this.bookingDetails.customerEmailID;
    this.invoice.content = this.bookingDetails.toString();
    this.locationService.createInvoice(this.invoice).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }
}
