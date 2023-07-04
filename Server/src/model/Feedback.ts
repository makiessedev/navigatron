import { RowDataPacket } from "mysql2";

export interface Feedback extends RowDataPacket {
  id: number;
  fkUser: number;
  fkNavigation: number;
  message: string;
  classification: number;
  createdAt: Date;
}
