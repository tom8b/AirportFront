import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from "@angular/forms";
import { Connection } from "src/app/models/Connection";
import { Airport } from "src/app/models/Airport";
import { ConnectionService } from "src/app/services/connection-service";
import { AirportService } from "src/app/services/airport.service";

@Component({
  selector: 'app-add-connection',
  templateUrl: './add-connection.component.html',
  styleUrls: ['./add-connection.component.css']
})
export class AddConnectionComponent implements OnInit {
connection: Connection = null;
    price: string;
    starting_airport: Airport;
    destination_airport: Airport;
    flight_date: string;
    airports: Airport[];

  constructor(private connectionService: ConnectionService, private airportService: AirportService) {}

  ngOnInit() {this.getAllAirports}

  createConnection() {
    this.connection = new Connection();

    this.connection.price = this.price;
    this.connection.starting_airport = this.starting_airport;
    this.connection.destination_airport = this.destination_airport;
    this.connection.flight_date = this.flight_date;

    this.connectionService.addConnection(this.connection);
  }

  getAllAirports() {
      this.airportService
        .getAllAirports()
        .subscribe(x => {
          this.airports = x;
        });
    }
}
