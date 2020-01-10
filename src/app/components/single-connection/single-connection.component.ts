import { Component, OnInit } from "@angular/core";
import { RouterModule, Routes, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-single-connection",
  templateUrl: "./single-connection.component.html",
  styleUrls: ["./single-connection.component.css"]
})
export class SingleConnectionComponent implements OnInit {
  sub: any;
  id: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"];
    });
  }
}
