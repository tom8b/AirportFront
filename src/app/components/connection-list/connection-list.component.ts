import { Component, OnInit } from "@angular/core";
import { Connection } from "../../models/Connection";
import { ConnectionService } from "../../services/connection-service";
import { Airport } from "../../models/Airport";

@Component({
  selector: "app-connection-list",
  templateUrl: "./connection-list.component.html",
  styleUrls: ["./connection-list.component.css"]
})
export class ConnectionListComponent implements OnInit {
  connections: Connection[];
  order: string = "Date";
  constructor(private connectionService: ConnectionService) {}

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
}
