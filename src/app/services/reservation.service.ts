import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Seat } from "../models/Seat";

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
}
