/*export class Connection {
  connectionId: number;
  price: number;
  starting_airport_ID: number;
  destination_airport_ID: number;
  flight_date: Date;
}*/
import { Airport } from "../models/Airport";
export class Connection {
  connectionId: number;
  price: string;
  starting_airport: Airport;
  destination_airport: Airport;
  flight_date: string;
}
