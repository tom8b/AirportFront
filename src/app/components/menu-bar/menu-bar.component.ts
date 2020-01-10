import { Component, OnInit } from "@angular/core";
import { AutenticationService } from "src/app/services/login/autentication.service";

@Component({
  selector: "app-menu-bar",
  templateUrl: "./menu-bar.component.html",
  styleUrls: ["./menu-bar.component.css"]
})
export class MenuBarComponent implements OnInit {
  constructor(public loginService: AutenticationService) {}

  ngOnInit() {}
}
