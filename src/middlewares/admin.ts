import User from "../models/user.model";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { unauthorizedexception } from "../utils/http.exception";

export const admin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.headers.authorization)
      throw new unauthorizedexception ("Missing authorization header.");
    if(req.user.rol!="admin")  throw new unauthorizedexception ("no es admin");
    next();
  } catch (error) {
    return next(error);
  }
};
