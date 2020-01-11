import { Component, OnInit } from "@angular/core";
import { ReservationService } from "src/app/services/reservation.service";
import { Seat } from "src/app/models/Seat";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-reservation",
  templateUrl: "./reservation.component.html",
  styleUrls: ["./reservation.component.css"]
})
export class ReservationComponent implements OnInit {
  sub: any;
  connectionId: number;
  freeSlots: Seat[];
  constructor(
    private reservationService: ReservationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.connectionId = params["id"];
      this.getFreeSlots();
    });
  }

  getFreeSlots() {
    this.reservationService.getFreeSlots(this.connectionId).subscribe(x => {
      this.freeSlots = x;
    });
  }
}
