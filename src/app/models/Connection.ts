import { Airport } from '../models/Airport';
export class Connection {
  connectionId: string;
  price: string;
  starting_airport: Airport;
  destination_airport: Airport;
  flight_date: string;
}
