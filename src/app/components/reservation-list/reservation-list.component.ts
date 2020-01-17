import { Component, OnInit } from "@angular/core";
import { Reservation } from "../../models/Reservation";
import { ReservationService } from "../../services/reservation.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-reservation-list",
  templateUrl: "./reservation-list.component.html",
  styleUrls: ["./reservation-list.component.css"]
})
export class ReservationListComponent implements OnInit {
  deletedID: number;
  reservations: Reservation[];
  constructor(private reservationService: ReservationService) {}
  private id = sessionStorage.getItem("userId");
  ngOnInit() {
    this.getUserReservations();
  }

  deleteReservation(id: number) {
    this.reservationService.deleteReservation(id);
    window.location.reload();
  }

  getUserReservations() {
    this.reservationService
      .getAllReservationsByUserId(this.id)
      .subscribe(data => {
        this.reservations = data;
      });
  }

  checkDateOfReservation() {
    //reservation.connection.flight_date
    //SPRAWDZE DATE TERAZNIEJSZA I ODJME OD TEJ Z LOTU
    //NA TEJ PODSTAWIE : 5 H PRZED LOTEM NIE MOZNA CANCELOWAC
    // 5H - 0 JEST JAKIS NAPIS: "MASZ NIEDLUGO LOT"
    // PO LOCIE NAPIS TYPU: "MAMY NADZIEJE ZE CI SIE PODOBALO"
  }
}
