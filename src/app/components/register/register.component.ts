import { Component, OnInit } from "@angular/core";
import { Validators, FormControl } from "@angular/forms";
import { Client } from "src/app/models/Client";
import { RegisterService } from "src/app/services/register.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  user: Client = null;
  emailFormControl;
  firstname: string;
  surname: string;
  email: string;
  password: string;
  login: string;

  constructor(private registerService: RegisterService) {}

  ngOnInit() {}

  registerUser() {
    this.user = new Client();

    this.user.login = this.login;
    this.user.email = this.email;
    this.user.name = this.firstname;
    this.user.surname = this.surname;
    this.user.password = this.password;
    this.user.admin_permission = false;
    // this.user.reservations = [];

    this.registerService.registerNewClient(this.user);
  }
}
