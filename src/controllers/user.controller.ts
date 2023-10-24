import { Request, Response, NextFunction } from "express";
import User from "../models/user.model";
import IUser from "../interfaces/user.interface";
import {
  NotFoundException,
  BadRequestException,
  HttpException,
  FileExists

} from "../utils/http.exception";
export const index = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    next(new FileExists( "Internal Server Error"));
  }
};

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { nombre, email, contraseña, rol,imagenUrl} = req.body;
    if (await User.findOne({ nombre })) {
      throw new BadRequestException("este usuario ya fue registrado");
    }


    const user: IUser = new User({
      nombre,
      email,
      contraseña,
      rol,
      imagenUrl,
    });

    await user.save();

    return res.status(200).json(user);
  } catch (error) {
    return next(error);
  }
};

export const show = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    
    if (!user) {
      throw new NotFoundException("User not found");
    }
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const destroy = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    
    if (!user) {
      throw new NotFoundException("User not found");
    }

    await user.deleteOne();
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
