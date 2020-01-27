import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LocationService {
  serviceUrl = "http://localhost:3812/";
  constructor(private http: HttpClient) {}

  fetchStates(): Observable<any> {
    const url = "/test";
    return this.http.get<any>(url);
  }
  fetchCityDetails(id): Observable<any> {
    console.log(id, "selected id");
    const url = "/test" + id;
    return this.http.get<any>(url);
  }
  customerValidate(data): Observable<any> {
    const url = this.serviceUrl + "customerlogin";
    return this.http.post<any>(url, data);
  }
  getBusDetails(): Observable<any> {
    const url = this.serviceUrl + "getallbusdetails";
    return this.http.get<any>(url);
  }
  getSingleBusDetails(id): Observable<any> {
    const url = this.serviceUrl + "busdetails/" + id;
    return this.http.get<any>(url);
  }

  getSingleCustomerDetails(id): Observable<any> {
    const url = this.serviceUrl + "getSingleCustomer/" + id;
    return this.http.get<any>(url);
  }
  getCoupon(): Observable<any> {
    const url = this.serviceUrl + "getcoupondetails";
    return this.http.get<any>(url);
  }
  createBooking(data): Observable<any> {
    const url = this.serviceUrl + "createbooking";
    return this.http.post<any>(url, data);
  }
  getSingleBookings(id): Observable<any> {
    const url = this.serviceUrl + "getbookings/" + id;
    return this.http.get<any>(url);
  }
  createInvoice(data): Observable<any> {
    const url = this.serviceUrl + "sendinvoice";
    return this.http.post<any>(url, data);
  }
}
