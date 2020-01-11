import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Client } from "../models/Client";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RegisterService {
  headers = new HttpHeaders({ "Content-Type": "application/json" });

  constructor(private http: HttpClient) {}

  public registerNewClient(client: Client) {
    console.log("EPEPEPEP");
    return this.http
      .post<Client>(
        "http://localhost:8080/client/register",
        JSON.stringify(client),
        { headers: this.headers }
      )
      .subscribe();
  }
}
