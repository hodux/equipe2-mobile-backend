import {Router} from "express";
import MovieController from "../controller/movie.controller.js";
import {verifyToken} from "../middleware/jwt.middleware.js";


const router = Router();
const movieController = new MovieController();
router.get("/movies", movieController.GetMovies);
router.get("/movie/:id", movieController.GetMovieByID);
export default router;