import { Router } from "express";
import * as userController from "../controllers/product.controller";
import {admin} from "../middlewares/admin";
import { authMiddleware } from "../middlewares/auth.middleware";
import { productValidators,mongoIdValidator } from "../middlewares/validators/product.Validators";
import { handleValidationErrors } from "../middlewares/validation.middleware";
const router = Router();


// OBTENER TODOS
router.get("/", userController.index);
// CREAR
router.post("/",authMiddleware,admin,...productValidators, handleValidationErrors,userController.create);
// OBTENER UNO
router.get("/:id",mongoIdValidator, handleValidationErrors, userController.show);
// BORRAR
router.delete("/:id",authMiddleware,admin,mongoIdValidator, handleValidationErrors, userController.destroy);


export default router;
