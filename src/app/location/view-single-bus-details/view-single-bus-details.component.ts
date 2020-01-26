import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { LocationService } from "../location.service";
import { BusDetails } from "../view-bus-details/busDetails.model";

@Component({
  selector: "app-view-single-bus-details",
  templateUrl: "./view-single-bus-details.component.html",
  styleUrls: ["./view-single-bus-details.component.css"]
})
export class ViewSingleBusDetailsComponent implements OnInit {
  busId;
  busDetails: BusDetails;
  seatNo = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  constructor(
    private locationService: LocationService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.busId = this.activateRoute.snapshot.paramMap.get("busid");
  }

  ngOnInit() {
    this.viewSingleBusDetails();
  }

  viewSingleBusDetails() {
    this.locationService.getSingleBusDetails(this.busId).subscribe(
      data => {
        this.busDetails = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  selectSeat(data) {
    this.router.navigate(["/booknow", this.busId, "customer", data]);
  }
}
