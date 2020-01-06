import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { User } from "../model/user";
import { Observable } from "rxjs";
import { Connection } from "../models/Connection";

@Injectable()
export class ConnectionService {
  private usersUrl: string;
  private deleteConnectionUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = "http://localhost:8080/connections/all";
    this.deleteConnectionUrl = "http://localhost:8080/connections/del"
  }

  public getAll(): Observable<Connection[]> {
    return this.http.get<Connection[]>(this.usersUrl);
  }
}
