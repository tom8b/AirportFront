import { Injectable } from "@angular/core";
import { Reservation } from "../models/reservation";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ReservationService {
  constructor(private http: HttpClient) {}

  public getAllReservationsByUserId(id: string): Observable<Reservation[]> {
    return this.http.get<Reservation[]>("http://localhost:8080/client/getReservations/"+id);
  }
}
