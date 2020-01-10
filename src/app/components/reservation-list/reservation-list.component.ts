import { Component, OnInit } from '@angular/core';
import { Reservation } from "../../models/Reservation";
import { ReservationService } from "../../services/reservation.service";

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  reservations: Reservation[];
    constructor(private reservationService: ReservationService) {}
    private id = sessionStorage.getItem("userId");
    ngOnInit() {
      this.reservationService.getAllReservationsByUserId(this.id).subscribe(data => {
        this.reservations = data;
      });
    }

}
