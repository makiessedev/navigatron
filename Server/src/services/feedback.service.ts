import { inject, injectable } from "tsyringe";
import { OkPacket } from "mysql2";

import { Database } from "../util/database";
import { Feedback } from "../model/Feedback";

interface ICreateFeedback {
  fk_user: number;
  fk_navigation: number;
  message: string;
  classification: string;
}

@injectable()
export class FeedbackService {
  constructor(@inject("Database") private database: Database) {}

  async createFeedback({
    fk_user,
    fk_navigation,
    message,
    classification,
  }: ICreateFeedback): Promise<void> {
    const sql =
      "INSERT INTO feedbacks (fk_user, fk_navigation, message, classification) VALUES (?, ?, ?, ?)";
    const params = [fk_user, fk_navigation, message, classification];

    await new Promise((resolve, reject) => {
      this.database.conn.query<OkPacket>(sql, params, (err, res) => {
        if (err) reject(err.message);

        resolve(res.insertId);
      });
    });
  }

  listFeedbackByUser(fk_user: string): Promise<Feedback[]> {
    const sql = `SELECT * FROM feedbacks WHERE fk_user = ${fk_user}`;

    return new Promise((resolve, reject) => {
      this.database.conn.query<Feedback[]>(sql, (err, res) => {
        if (err) reject(err.message);

        resolve(res);
      });
    });
  }
}
