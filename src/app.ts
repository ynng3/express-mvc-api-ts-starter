import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import * as responseError from "./middlewares/responseMiddleware";
import example from "./routes/example";

const app = express();

dotenv.config();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(bodyParser.json());
app.use("/example", example);

app.use(responseError.notFound);
app.use(responseError.errorHandler);

export default app;
