"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoIdValidator = exports.productValidators = void 0;
const express_validator_1 = require("express-validator");
exports.productValidators = [
    (0, express_validator_1.check)("nombre")
        .isLength({ min: 3, max: 20 })
        .isLowercase()
        .withMessage("el nombre debe tener al menos 3 caracteres y maximo 20,todo deve estar en minuscula"),
    (0, express_validator_1.check)("descripcion").isLength({ min: 3 }).withMessage("debe tener longitud minima de 10 caracteres"),
    (0, express_validator_1.check)("precio")
        .isInt({ min: 0 })
        .withMessage("el precio no debe ser negativo"),
    (0, express_validator_1.check)("imagenUrl").isURL().withMessage("la url de la imagen no es valida"),
];
exports.mongoIdValidator = (0, express_validator_1.check)("id")
    .isMongoId()
    .withMessage("El ID proporcionado no es válido para MongoDB.");
