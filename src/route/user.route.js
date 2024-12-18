import {Router} from "express";
import UserController from "../controller/user.controller.js";

const userController = new UserController();
const router = Router();
router.get("/users/:id", userController.GetUserByID);
router.post("/users", userController.CreateUser);
router.post("/login", userController.Login);
router.put("/users/:id", userController.UpdateUser);
router.delete("/users/:id", userController.DeleteUser);

export default router;