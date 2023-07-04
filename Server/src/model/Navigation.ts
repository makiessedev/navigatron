import { RowDataPacket } from "mysql2";

export interface Navigation extends RowDataPacket {
  id: number;
  fkUser: number;
  origin: string;
  destiny: string;
  duration: string;
  createdAt: Date;
}
