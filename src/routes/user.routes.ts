import { Router } from "express";
import * as userController from "../controllers/user.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { handleValidationErrors } from "../middlewares/validation.middleware";
import { authSingupValidators, mongoIdValidator } from "../middlewares/validators/userValidators";
import { admin } from "../middlewares/admin";



const router = Router();


// OBTENER TODOS
router.get("/", userController.index);
// CREAR
router.post("/",authMiddleware,admin,...authSingupValidators,handleValidationErrors, userController.create);
// OBTENER UNO
router.get("/:id", userController.show);
// BORRAR
router.delete("/:id",authMiddleware,admin,mongoIdValidator, userController.destroy);


export default router;
