import { Injectable } from "@angular/core";
import { Airport } from "../models/Airport";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AirportService {
  constructor(private http: HttpClient) {}

  public getAllAirports(): Observable<Airport[]> {
    return this.http.get<Airport[]>("http://localhost:8080/airport/all");
  }
}
