import { Component, OnInit } from "@angular/core";
import { RouterModule, Routes, ActivatedRoute } from "@angular/router";
import { ConnectionService } from "src/app/services/connection-service";
import { Connection } from "src/app/models/Connection";

@Component({
  selector: "app-single-connection",
  templateUrl: "./single-connection.component.html",
  styleUrls: ["./single-connection.component.css"]
})
export class SingleConnectionComponent implements OnInit {
  sub: any;
  id: number;
  connection: Connection;

  constructor(
    private route: ActivatedRoute,
    private connectionService: ConnectionService
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
    });
  }

  getFreeSeats() {}
}
