import { Component, OnInit } from "@angular/core";
import { RouterModule, Routes, ActivatedRoute } from "@angular/router";
import { ConnectionService } from "src/app/services/connection-service";
import { Connection } from "src/app/models/Connection";
import { ReservationService } from "src/app/services/reservation.service";
import { Seat } from "src/app/models/Seat";

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
  seatId: number;

  constructor(
    private route: ActivatedRoute,
    private connectionService: ConnectionService,
    private reservationService: ReservationService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"];
      this.getConnectionInfo();
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
    console.log(this.seatId);
  }
}
