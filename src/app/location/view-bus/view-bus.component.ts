import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LocationService } from "../location.service";
import { BusDetails } from "../view-bus-details/busDetails.model";

@Component({
  selector: "app-view-bus",
  templateUrl: "./view-bus.component.html",
  styleUrls: ["./view-bus.component.css"]
})
export class ViewBusComponent implements OnInit {
  busDetails: BusDetails;
  constructor(
    private locationService: LocationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAllBusDetails();
  }

  getAllBusDetails() {
    this.locationService.getBusDetails().subscribe(
      data => {
        console.log(data, "bus details");
        this.busDetails = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  addBus() {
    this.router.navigate(["/test/addbusdetails"]);
  }
}
