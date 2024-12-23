import express from "express";
import cors from "cors";
import userRoute from "./route/user.route.js";
import movieRoute from "./route/movie.route.js";
import {config} from "./config/config.js";

const app = express();

app.use(cors());
app.use(express.json());

const port = config.port;
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
});

app.get("/", (req, res) => {
    res.send("Welcome to the server!");
})

app.use(userRoute);
app.use(movieRoute);