import { Request, Response, NextFunction } from "express";
import User from "../models/user.model";
import IUser from "../interfaces/user.interface";
import jwt from "jsonwebtoken";
import {
  BadRequestException,
  HttpException,
  NotFoundException,
  unauthorizedexception,
} from "../utils/http.exception";

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { nombre, email, contraseña, rol,imagenUrl } = req.body;

    if (await User.findOne({ email })) {
      throw new BadRequestException("este usuario ya fue registrado");
    }

    let user: IUser = new User({
      nombre,
      email,
      contraseña,
      rol,
      imagenUrl,
    });

    if ((await user.guardarContraseña()) === false) {
      throw new BadRequestException("fallo el cifrado  de contraseña");
    }

    await user.save();

    // Devolver datos
    const userData = await User.findById(user._id).orFail(
      new NotFoundException("User Data not found")
    );
    return res.json(userData);
  } catch (err) {
    next(err);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user: IUser = await User.findOne({ email: req.body.email })
      .select("+contraseña")
      .orFail(new NotFoundException("User not found"));

    if (!user.contraseña)
      throw new HttpException(401,"Contraseña faltante");

    const correctPassword = await user.validarContraseña(req.body.contraseña);
    if (!correctPassword) throw new unauthorizedexception("Contraseña incorrecta");

    const token: string = jwt.sign(
      { sub: user._id },
      process.env.JWT_SECRET || "",
      {
        expiresIn: process.env.JWT_EXPIRATION,
      }
    );

    const { contraseña, ...data } = user.toJSON();
    return res.header("auth-token", token).json({ ...data, token });
  } catch (error) {
    next(error);
  }
};
