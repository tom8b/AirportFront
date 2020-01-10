import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { User } from "../model/user";
import { Observable } from "rxjs";
import { Connection } from "../models/Connection";

@Injectable()
export class ConnectionService {
  private usersUrl: string;
  private deleteConnectionUrl: string;

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Connection[]> {
    return this.http.get<Connection[]>("http://localhost:8080/connections/all");
  }

  public getSingleConnectionById(id: number): Observable<Connection> {
    return this.http.get<Connection>("http://localhost:8080/connections/" + id);
  }

  public getConnectionsForCities(
    start: string,
    destination: string
  ): Observable<Connection[]> {
    return this.http.get<Connection[]>(
      "http://localhost:8080/connections/search/" + start + "+" + destination
    );
  }

  public reserveConnection(): Observable<Connection[]> {
    return this.http.get<Connection[]>(
      "http://localhost:8080/connections/search/"
    );
  }
}
