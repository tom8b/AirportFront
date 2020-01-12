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
}
