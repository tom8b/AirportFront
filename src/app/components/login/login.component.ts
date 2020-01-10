import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material";
import { AutenticationService } from "src/app/services/login/autentication.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username = "javainuse";
  password = "";
  invalidLogin = false;

  constructor(
    private router: Router,
    private loginService: AutenticationService
  ) {}

  ngOnInit() {}
  checkLogin() {
    if (this.loginService.authenticate(this.username, this.password)) {
      this.router.navigate([""]);
      this.invalidLogin = false;
    } else this.invalidLogin = true;
  }
}
