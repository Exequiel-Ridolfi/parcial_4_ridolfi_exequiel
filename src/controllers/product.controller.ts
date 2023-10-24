import { Request, Response, NextFunction } from "express";
import products from "../models/product.model";
import IProducts from "../interfaces/product.interface";
import {
  NotFoundException,
  BadRequestException,
  HttpException,
  unauthorizedexception,
  
} from "../utils/http.exception";
export const index = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await products.find();
    return res.status(200).json(users);
  } catch (error) {
    next(new HttpException(500, "Internal Server Error"));
  }
};

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { nombre, descripcion, precio, imagenUrl } = req.body;
    if (await products.findOne({ nombre })) {
      throw new BadRequestException("The user is already registered");
    }

    const user: IProducts = new products({
      nombre,
      descripcion,
      precio,
      imagenUrl
     
    });

    await user.save();

    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const show = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const user = await products.findById(id);
    if (!user) {
      throw new NotFoundException("Record not found");
    }
    return res.status(200).json(user);
  } catch (error) {
    return next(error);
  }
};

export const destroy = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const user = await products.findById(id);

    if (!user) {
      throw new NotFoundException("Record not found");
    }

    await user.deleteOne();

    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};