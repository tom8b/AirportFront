import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Client } from "../models/Client";

@Injectable({
  providedIn: "root",
})
export class ClientService {
  constructor(private http: HttpClient) {}

  public getUserData(id: number): Observable<Client> {
    return this.http.get<Client>("http://localhost:8080/client/" + id);
  }

  public getEmployees(): Observable<Client[]> {
    return this.http.get<Client[]>("http://localhost:8080/client/all/");
  }
}
