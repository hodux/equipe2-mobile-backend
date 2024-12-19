import {getAllMovies} from "../service/movie.service.js";

export default class MovieController {

    async GetMovies(req, res) {
        let movies = await getAllMovies();
        if (movies) {
            res.status(200).json(movies);
        } else {
            res.status(404).send("No data");
        }
    }

}