import express from "express";
import cors from "cors";
import userRoute from "./route/user.route.js";
import dotenv from "dotenv";
import movieRoute from "./route/movie.route.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
});

app.get("/", (req, res) => {
    res.send("Welcome to the server!");
})

app.use(userRoute);
app.use(movieRoute);