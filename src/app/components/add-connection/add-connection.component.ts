import { Component, OnInit } from "@angular/core";
import { Validators, FormControl } from "@angular/forms";
import { Connection } from "src/app/models/Connection";
import { Airport } from "src/app/models/Airport";
import { ConnectionService } from "src/app/services/connection-service";
import { AirportService } from "src/app/services/airport.service";

@Component({
  selector: "app-add-connection",
  templateUrl: "./add-connection.component.html",
  styleUrls: ["./add-connection.component.css"]
})
export class AddConnectionComponent implements OnInit {
  connection: Connection;
  price: string;
  starting_airport: Airport;
  destination_airport: Airport;
  flight_date: Date;
  airports: Airport[];
  airport: Airport;
  date: string;
  time: string;

  constructor(
    private connectionService: ConnectionService,
    private airportService: AirportService
  ) {}

  ngOnInit() {
    this.getAllAirports();
  }

  createConnection() {
    console.log(this.starting_airport);
    this.connection = new Connection();
    this.connection.price = this.price;
    this.connection.starting_airport = this.starting_airport;
    this.connection.destination_airport = this.destination_airport;
    this.connection.flight_date = new Date(this.date+'T'+this.time);
    this.connection.flight_date.setHours(this.connection.flight_date.getHours() + 1);
    const myObjStr = JSON.stringify(this.connection);
    console.log(JSON.parse(myObjStr));
    this.connectionService.addConnection(this.connection);
  }

  getAllAirports() {
    this.airportService.getAllAirports().subscribe(x => {
      this.airports = x;
    });
  }
}
