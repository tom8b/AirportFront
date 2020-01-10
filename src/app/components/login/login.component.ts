import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material";
import { AutenticationService } from "src/app/services/login/autentication.service";
import { Client } from "src/app/models/Client";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";
  invalidLogin = false;
  user: Client;

  constructor(
    private router: Router,
    private loginService: AutenticationService
  ) {}

  ngOnInit() {}
  tryLogin() {
    this.loginService
      .tryAuthenticateAccount(this.username, this.password)
      .subscribe(user => {
        this.user = user;

        if (this.user == null) {
          this.invalidLogin = true;
        } else this.loginService.login(this.user);
      });
  }
}
