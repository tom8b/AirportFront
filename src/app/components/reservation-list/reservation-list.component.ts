import { Component, OnInit } from "@angular/core";
import { Reservation } from "../../models/Reservation";
import { ReservationService } from "../../services/reservation.service";
import { ClientService } from "../../services/client.service";
import { Observable } from "rxjs";
import { Client } from "src/app/models/Client";

@Component({
  selector: "app-reservation-list",
  templateUrl: "./reservation-list.component.html",
  styleUrls: ["./reservation-list.component.css"],
})
export class ReservationListComponent implements OnInit {
  deletedID: number;
  reservations: Reservation[];
  employees: Client[];
  constructor(
    private reservationService: ReservationService,
    private clientService: ClientService
  ) {}
  private id = sessionStorage.getItem("userId");

  hourToFlight: number;
  ngOnInit() {
    this.getUserReservations();
    this.getEmployees();
  }

  deleteReservation(id: number) {
    this.reservationService.deleteReservation(id);
    window.location.reload();
  }

  getEmployees() {
    this.clientService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

  getUserReservations() {
    this.reservationService
      .getAllReservationsByUserId(this.id)
      .subscribe((data) => {
        this.reservations = data;
      });
  }

  checkDateOfReservation(id: number) {
    var reservationDate = new Date(
      this.reservations[id].connection.flight_date
    );

    var today = new Date();
    var today = new Date();
    var diff = reservationDate.getTime() - today.getTime();
    var days = Math.floor(diff / (60 * 60 * 24 * 1000));
    var hours = Math.floor(diff / (60 * 60 * 1000)) - days * 24;

    if (diff > 0) return hours;
    else return -hours;
  }
}
