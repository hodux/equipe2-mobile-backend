import express from "express";
import cors from "cors";
import userRoute from "./route/user.route.js";
import dotenv from "dotenv";
dotenv.config();

console.log(process.env.MYSQL_HOST);
const app = express();
app.use(cors());
app.use(express.json());

app.listen(8080, () => {
    console.log("Server started at http://localhost:8080");
});

console.log(process.env.MYSQL_HOST);
app.get("/", (req, res) => {
    res.send("Welcome to the server!");
})

// app.use(userRoute);