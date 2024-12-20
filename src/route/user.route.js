import {Router} from "express";
import UserController from "../controller/user.controller.js";
import {verifyToken} from "../middleware/jwt.middleware.js";

const userController = new UserController();
const router = Router();
router.get("/users/:id", verifyToken, userController.GetUserByID);
router.post("/users", userController.CreateUser);
router.post("/login", userController.Login);
router.post("/authenticate", userController.Authenticate);
router.put("/users/:id", verifyToken, userController.UpdateUser);
router.delete("/users/:id", verifyToken, userController.DeleteUser);

export default router;