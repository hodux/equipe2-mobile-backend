import mysql from 'mysql2';
import dotenv from "dotenv";
dotenv.config();
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

export async function getAllMovies(){
    //DEBUG
    console.log(`movie.service.js : getting all movies`);
    //QUERY
    const [check] = await pool.query(`SELECT * FROM Movies`);
    return check;
}
//TEST
// console.log(await getAllMovies());
export async function getMovieById(id){
    //DEBUG
    console.log(`movie.service.js : retriving user with id: ${id}`)
    //QUERY
    const [rows] = await pool.query('SELECT * FROM Movies WHERE id=?', [id]);
    return rows[0];
}
// TEST
// console.log(await getMovieById(1));