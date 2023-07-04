import { RowDataPacket } from "mysql2";
import { Navigation } from "./Navigation";
import { User } from "./User";

export interface History extends RowDataPacket {
  id: number;

  fkUser: User;
  fkNavigation: Navigation;
}
