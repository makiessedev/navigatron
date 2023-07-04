import "reflect-metadata";
import "./shared/container";

import express, { Application, NextFunction, Request, Response } from "express";
import "express-async-errors";

import cors from "cors";

import { router } from "./routes";
import { AppError } from "./errors/AppError";

class App {
  public express: Application;

  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
    this.errors();
  }

  private middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private routes() {
    this.express.use(router);
  }

  private errors() {
    this.express.use(
      (
        err: Error,
        request: Request,
        response: Response,
        next: NextFunction
      ) => {
        if (err instanceof AppError) {
          return response.status(err.statusCode).json({
            message: err.message,
          });
        }

        return response.status(500).json({
          status: "error",
          message: `Internet server error - ${err.message}`,
        });
      }
    );
  }
}

export default new App().express;
