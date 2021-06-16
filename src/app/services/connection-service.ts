import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { User } from "../model/user";
import { Observable } from "rxjs";
import { Connection } from "../models/Connection";

@Injectable()
export class ConnectionService {
  headers = new HttpHeaders({ "Content-Type": "application/json" });
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

  public editConnection(connection: Connection){
    return this.http.post<Connection>(
    "http://localhost:8080/connections/edit",
            JSON.stringify(connection),
            {
              headers: this.headers
            }
            ).subscribe();
  }

  public addConnection(connection: Connection){
      return this.http.post<Connection>(
      "https://localhost:44371/api/values/addConnection",  
              JSON.stringify(connection),
              {
                headers: this.headers
              }
              ).subscribe();
    }

  deleteConnection(id: number) {
      return this.http
        .get<Connection>("https://localhost:44371/api/values/deleteConnection/" + id)
        .subscribe();
    }

  public filterConnections(
    order: string,
    connections: Connection[]
  ): Connection[] {
    if (order == "DateInc") {
      connections.sort((val1, val2) => {
        return (
          <any>new Date(val2.flight_date) - <any>new Date(val1.flight_date)
        );
      });
    } else if (order == "DateDesc") {
      connections.sort((val1, val2) => {
        return (
          <any>new Date(val1.flight_date) - <any>new Date(val2.flight_date)
        );
      });
    } else if (order == "PriceInc") {
      connections.sort((val1, val2) => {
        return <any>new Date(val1.price) - <any>new Date(val2.price);
      });
    } else if (order == "PriceDesc") {
      connections.sort((val1, val2) => {
        return <any>new Date(val2.price) - <any>new Date(val1.price);
      });
    }

    return connections;
  }
}
