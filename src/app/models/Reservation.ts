import { Connection } from '../models/Connection';
import { Seat } from '../models/Seat';
import { Client } from '../models/Client';

export class Reservation {
  reservation_id: number;
  connection: Connection;
  client: Client;
  seat: Seat;
}
