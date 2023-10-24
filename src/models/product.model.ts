import { model, Schema } from "mongoose";
import IProducts from "../interfaces/product.interface";


const UserSchema = new Schema<IProducts>(
  {
    nombre: {
      type: String,
      required: [true, "El nombre es obligatorio"],
      unique: true,
    },
    descripcion: {
      type: String,
    },
    precio: {
      type: Number,
      required: [true, "El precio es obligatorio"],
      minimum: [0, "El precio  debe ser mayor o igual a cero"],
    },
    imagenUrl: {
      type: String,
      lowercase: true,
      pattern: "http//",
      trim: true,
      
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

export default model<IProducts>("Products", UserSchema);