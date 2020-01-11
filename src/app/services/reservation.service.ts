import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Seat } from "../models/Seat";
import { Reservation } from "../models/reservation";
import { CATCH_ERROR_VAR } from "@angular/compiler/src/output/output_ast";
import { Connection } from "../models/Connection";

@Injectable({
  providedIn: "root"
})
export class ReservationService {
  headers = new HttpHeaders({ "Content-Type": "application/json" });

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
    return this.http
      .post<Reservation>(
        "http://localhost:8080/reservation/add",
        JSON.stringify(reservation),
        {
          headers: this.headers
        }
      )
      .subscribe();
  }

  public changeStateOfSeat(seat: Seat) {
    console.log("STRINGI" + JSON.stringify(seat));
    let headerss = new HttpHeaders({
      "Content-Type": "text/html",
      "Access-Control-Allow-Origin": "http:/localhost:8080"
    });
    return this.http
      .put<Seat>(
        "http://localhost:8080/seat/changeState",
        JSON.stringify(seat),
        {
          headers: headerss
        }
      )
      .subscribe();
  }

  testFunction(connection: Connection) {
    console.log("STRINGI" + JSON.stringify(connection));
    let headerss = new HttpHeaders({
      "Content-Type": "text/html"
      // "Access-Control-Allow-Origin": "http:/localhost:8080"
    });
    return this.http
      .put<Seat>(
        "http://localhost:8080/seat/changeState",
        JSON.stringify(connection),
        {
          headers: headerss
        }
      )
      .subscribe();
  }
}
