import { Component, OnInit } from "@angular/core";
import { Connection } from "../../models/Connection";
import { ConnectionService } from "../../services/connection-service";
import { Airport } from "../../models/Airport";
import { AutenticationService } from "src/app/services/login/autentication.service";

@Component({
  selector: "app-connection-list",
  templateUrl: "./connection-list.component.html",
  styleUrls: ["./connection-list.component.css"]
})
export class ConnectionListComponent implements OnInit {
  connections: Connection[];
  order: string = "Date";
  constructor(
    private connectionService: ConnectionService,
    public loginService: AutenticationService
  ) {}

  ngOnInit() {
    this.connectionService.getAll().subscribe(data => {
      this.connections = data;
      this.connections = this.connections.sort(a => parseInt(a.price));
      this.applyFilter();
    });
  }

  applyFilter() {
    this.connections = this.connectionService.filterConnections(
      this.order,
      this.connections
    );
  }

  deleteConnection(id: number) {
    this.connectionService.deleteConnection(id);
    window.location.reload();
  }

  isActual(id: number): boolean {
    var reservationDate = new Date(this.connections[id].flight_date);

    var today = new Date();
    var diff = reservationDate.getTime() - today.getTime();
    var days = Math.floor(diff / (60 * 60 * 24 * 1000));
    var hours = Math.floor(diff / (60 * 60 * 1000)) - days * 24;

    if (hours > 5 && diff > 0) return true;
    else return false;
  }
}
