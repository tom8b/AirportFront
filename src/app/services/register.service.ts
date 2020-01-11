import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Client } from "../models/Client";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  public registerNewClient(client: Client): Observable<Client> {
    console.log("EPEPEPEP");
    var x = this.http.put<Client>(
      "https://localhost:8080/client/register",
      client
    );

    return x;
  }
}
