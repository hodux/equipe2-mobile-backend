import {getAllMovies, getMovieById} from "../service/movie.service.js";
import {getUserById} from "../service/user.service.js";

export default class MovieController {

    async GetMovies(req, res) {
        let movies = await getAllMovies();
        if (movies) {
            res.status(200).json(movies);
        } else {
            res.status(404).send("No data");
        }
    }
    async GetMovieByID(req, res) {
        let id = req.params.id;
        if (id) {
            let movie = await getMovieById(id);
            if (movie) {
                res.status(200).json(movie);
            } else {
                res.status(404).send("User not found");
            }
        } else {
            res.status(400).send("Error with parameter");
        }
    }

}