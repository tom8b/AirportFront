import { Component, OnInit } from "@angular/core";
import { ConnectionService } from "src/app/services/connection-service";
import { Connection } from "src/app/models/Connection";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  public connections: Connection[];
  constructor(public connectionService: ConnectionService) {}

  ngOnInit() {}

  public getConnections() {
    this.connectionService.findAll().subscribe(x => (this.connections = x));
    console.log("WORK!!");
  }
}
