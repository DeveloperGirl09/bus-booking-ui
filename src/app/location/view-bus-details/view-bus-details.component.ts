import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LocationService } from "../location.service";
import { BusDetails } from "./busDetails.model";

@Component({
  selector: "app-view-bus-details",
  templateUrl: "./view-bus-details.component.html",
  styleUrls: ["./view-bus-details.component.css"]
})
export class ViewBusDetailsComponent implements OnInit {
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
  viewBusDetails(id) {
    this.router.navigate(["/busdetails", id]);
  }
}
