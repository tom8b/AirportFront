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
    return this.http.get<Client>(
      "http://localhost:8080/client/login/" + username + "+" + password
    );
  }

  login(user: Client) {
    sessionStorage.setItem("userName", user.name);
    sessionStorage.setItem("userSurname", user.surname);
    sessionStorage.setItem("userEmail", user.email);
    sessionStorage.setItem("userLogin", user.login);
    sessionStorage.setItem("userId", user.client_id.toString());
    sessionStorage.setItem(
      "userAdminPermission",
      user.admin_permission.toString()
    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("userName");
    //console.log(!(user === null));
    return !(user === null);
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
