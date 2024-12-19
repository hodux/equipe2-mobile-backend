import {Router} from "express";
import MovieController from "../controller/movie.controller.js";


const router = Router();
const movieController = new MovieController();
router.get("/movies", movieController.GetMovies);

export default router;