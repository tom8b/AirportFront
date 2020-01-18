import { Component, OnInit } from "@angular/core";
import { RouterModule, Routes, ActivatedRoute } from "@angular/router";
import { ConnectionService } from "src/app/services/connection-service";
import { Connection } from "src/app/models/Connection";
import { ReservationService } from "src/app/services/reservation.service";
import { Seat } from "src/app/models/Seat";
import { Reservation } from "src/app/models/reservation";
import { ClientService } from "src/app/services/client.service";
import { Client } from "src/app/models/Client";
import { Airport } from "src/app/models/Airport";

@Component({
  selector: "app-single-connection",
  templateUrl: "./single-connection.component.html",
  styleUrls: ["./single-connection.component.css"]
})
export class SingleConnectionComponent implements OnInit {
  sub: any;
  id: number;
  connection: Connection;
  freeSlots: Seat[];
  userSeat: Seat;
  reservation: Reservation;
  client: Client;

  connectionId: number;
  price: string;
  starting_airport: Airport;
  destination_airport: Airport;
  flight_date: Date;

  spresp: any;
  postdata: Reservation;

  constructor(
    private route: ActivatedRoute,
    private connectionService: ConnectionService,
    private reservationService: ReservationService,
    private clientService: ClientService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"];
      this.getConnectionInfo();
      this.getClientInfo();
    });
  }

  getConnectionInfo() {
    this.connectionService.getSingleConnectionById(this.id).subscribe(x => {
      this.connection = x;
      this.getFreeSlots();
    });
  }

  getFreeSlots() {
    this.reservationService
      .getFreeSlots(this.connection.connectionId)
      .subscribe(x => {
        this.freeSlots = x;
      });
  }

  reserveSlot() {
    this.reservation = new Reservation();
    this.reservation.connection = this.connection;
    this.reservation.seat = this.userSeat;
    this.reservation.client = this.client;
    this.reservation.reservation_id = 2;

    this.reservationService.reserveConnection(this.reservation);
    this.reservationService.changeStateOfSeat(this.reservation.seat.seat_id);
    this.refreshSlots();
  }

  getClientInfo() {
    var clientId = parseInt(sessionStorage.getItem("userId"));
    this.clientService.getUserData(clientId).subscribe(x => {
      this.client = x;
    });
  }

  refreshSlots() {
    this.getFreeSlots();
  }

  updateConnection() {
    this.connection.connectionId = this.connectionId;
    this.connection.price = this.price;
    this.connection.starting_airport = this.starting_airport;
    this.connection.destination_airport = this.destination_airport;
    this.connection.flight_date = this.flight_date;
    this.connectionService.editConnection(this.connection);
  }
}
