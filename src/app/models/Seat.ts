import { Connection } from "./Connection";

export class Seat {
  seat_id: number;
  row: number;
  seat_number: number;
  conection: Connection;
  is_reserved: boolean;
}
