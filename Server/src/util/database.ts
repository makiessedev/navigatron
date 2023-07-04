import "dotenv/config";

import mysql, { Connection } from "mysql2";

import { AppError } from "../errors/AppError";

export class Database {
  private host: string;
  private database: string;
  private user: string;
  private password: string;
  public readonly conn: Connection;

  constructor() {
    this.host = String(process.env.DATABASE_URL);
    this.database = String(process.env.DATABASE_DATABASE);
    this.user = String(process.env.DATABASE_USER);
    this.password = String(process.env.DATABASE_PASS);

    this.conn = this.getConn();
  }

  private getConn() {
    const connection = mysql.createConnection({
      host: this.host,
      user: this.user,
      password: this.password,
      database: this.database,
    });

    connection.connect((err) => {
      if(err) {
        throw new AppError(err.message)
      }
    })

    return connection;
  }
}
