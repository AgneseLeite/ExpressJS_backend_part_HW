import express from "express";
import { Request, Response, Router } from "express";
import bodyparser from "body-parser";
import cors from "cors";
import routes from './api/routes';
import * as MySQLConnector from './api/utils/mysql.connector';

const app = express();

// create database pool
MySQLConnector.init();

app.use(bodyparser.json());
app.use(cors({ origin: "*" }));

app.get("/", (req: Request, res: Response) => {
  res.send("Application works!");
});

app.use('/api/', routes);

app.listen(3004, () => {
  console.log("Application started on port 3004!");
});
