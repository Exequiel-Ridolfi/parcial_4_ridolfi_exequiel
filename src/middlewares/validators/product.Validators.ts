import { check, ValidationChain } from "express-validator";

export const productValidators: Array<ValidationChain> = [
    check("nombre")
    .isLength({ min: 3,max:20})
    .isLowercase()
    .withMessage("el nombre debe tener al menos 3 caracteres y maximo 20,todo deve estar en minuscula"),
  check("descripcion").isLength({ min: 3}).withMessage("debe tener longitud minima de 10 caracteres"),
 
  check("precio")
    .isInt({min:0})
    .withMessage("el precio no debe ser negativo"),

    check("imagenUrl").isURL().withMessage("la url de la imagen no es valida"),
];



export const mongoIdValidator: ValidationChain = check("id")
  .isMongoId()
  .withMessage("El ID proporcionado no es válido para MongoDB.");

  