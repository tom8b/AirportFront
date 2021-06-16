import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Client } from "src/app/models/Client";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AutenticationService {
  constructor(private http: HttpClient) {}

  public tryAuthenticateAccount(username, password): Observable<Client> {
    console.log(username + "+" + password);
    return this.http.post<Client>(
      "https://localhost:44371/api/values/login", {login: username, password: password}
    );
  }

  login(user: Client) {
    console.log(user)
    sessionStorage.setItem("userName", user.name);
    sessionStorage.setItem("userSurname", user.surname);
    sessionStorage.setItem("userEmail", user.email);
    sessionStorage.setItem("userLogin", user.login);
    sessionStorage.setItem("userId", user.client_ID.toString());
    sessionStorage.setItem(
      "userAdminPermission",
      user.admin_Permission.toString()
    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("userName");
    return !(user === null);
  }

  isAdminLoggedIn() {
    return sessionStorage.getItem("userAdminPermission") === "true";
  }

  logOut() {
    sessionStorage.removeItem("userName");
    sessionStorage.removeItem("userSurname");
    sessionStorage.removeItem("userEmail");
    sessionStorage.removeItem("userLogin");
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("userAdminPermission");
  }
}
