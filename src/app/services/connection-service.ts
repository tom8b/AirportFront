import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { User } from "../model/user";
import { Observable } from "rxjs";
import { Connection } from "../models/Connection";

@Injectable()
export class ConnectionService {
  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = "http://localhost:8080/users";
  }

  public findAll(): Observable<Connection[]> {
    return this.http.get<Connection[]>(this.usersUrl);
  }
}
