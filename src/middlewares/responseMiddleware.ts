import { NextFunction, Request, Response } from "express";
import HttpError from "../utils/HttpError";

export function notFound(req: Request, res: Response, next: NextFunction) {
  next(new HttpError("Route cannot be found.", 404));
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  // If the headers have already been sent, delegate to the default error handler
  if (res.headersSent) {
    return next(err);
  }

  if (err instanceof HttpError) {
    res
      .status(err.statusCode || 500)
      .json({ message: err.message || "Something went wrong!" });
  } else {
    res.status(500).json({ message: "Something went wrong!" });
  }
}
