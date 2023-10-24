import User from "../models/user.model";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { BadRequestException, unauthorizedexception } from "../utils/http.exception";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.headers.authorization)
    throw new BadRequestException ("introduce un token");

    req.token = req.headers.authorization.split(" ")[1];

    const decoded = jwt.verify(req.token, process.env.JWT_SECRET || "") as any;
    if (!decoded) throw new unauthorizedexception ("error a verificar el token ");

    const userFound = await User.findById(decoded.sub);
    if (!userFound) throw new unauthorizedexception ("usuario no existe en el login");

    req.user = userFound;
    next();
  } catch (error) {
    return next(error);
  }
};
