import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Seat } from "../models/Seat";
import { Reservation } from "../models/reservation";

@Injectable({
  providedIn: "root"
})
export class ReservationService {
  constructor(private http: HttpClient) {}

  public getFreeSlots(id: number): Observable<Seat[]> {
    return this.http.get<Seat[]>(
      "http://localhost:8080/seat/notReserved/" + id
    );
  }

  public getAllReservationsByUserId(id: string): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(
      "http://localhost:8080/reservation/getReservationsForUser/" + id
    );
  }

  public reserveConnection(reservation: Reservation) {
    return this.http.post<Reservation[]>(
      "http://localhost:8080/reservation",
      reservation
    );
  }
}
