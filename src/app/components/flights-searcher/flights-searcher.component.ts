import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { AirportService } from "src/app/services/airport.service";
import { Airport } from "src/app/models/Airport";
import { Connection } from "src/app/models/Connection";
import { ConnectionService } from "src/app/services/connection-service";

@Component({
  selector: "app-flights-searcher",
  templateUrl: "./flights-searcher.component.html",
  styleUrls: ["./flights-searcher.component.css"]
})
export class FlightsSearcherComponent {
  airports: Airport[];
  startPoint: string;
  destinationPoint: string;
  avaiableConnections: Connection[] = [];
  avaiableConnectionsAmount: number;
  order: string = "date";

  constructor(
    private airportService: AirportService,
    private connectionsService: ConnectionService
  ) {}

  ngOnInit() {
    this.getAllAirports();
  }

  getAllAirports() {
    this.airportService.getAllAirports().subscribe(x => {
      this.airports = x;
    });
  }

  getAvaiableConnections() {
    this.connectionsService
      .getConnectionsForCities(this.startPoint, this.destinationPoint)
      .subscribe(x => {
        this.avaiableConnections = x;
      });
  }

  searchConnections() {
    this.getAvaiableConnections();
  }

  applyFilter() {
    this.avaiableConnections = this.connectionsService.filterConnections(
      this.order,
      this.avaiableConnections
    );
  }

  isActual(id: number): boolean {
    var reservationDate = new Date(this.avaiableConnections[id].flight_date);

    var today = new Date();
    var diff = reservationDate.getTime() - today.getTime();
    var days = Math.floor(diff / (60 * 60 * 24 * 1000));
    var hours = Math.floor(diff / (60 * 60 * 1000)) - days * 24;

    console.log(hours);
    if (hours > 5 && diff > 0) return true;
    else return false;
  }
}
