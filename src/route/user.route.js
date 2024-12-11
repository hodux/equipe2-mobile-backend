import {Router} from "express";
import UserController from "../controller/user.controller.js";

const userController = new UserController();
const router = Router();

router.post("/users", userController.CreateUser);

export default router;