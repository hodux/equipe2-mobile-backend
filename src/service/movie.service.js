import mysql from 'mysql2';
import {config} from "../config/config.js";

const pool = mysql.createPool(config.pool).promise()

export async function getAllMovies(){
    //DEBUG
    console.log(`movie.service.js : getting all movies`);
    //QUERY
    const [check] = await pool.query(`SELECT * FROM movies`);
    return check;
}
//TEST
// console.log(await getAllMovies());
export async function getMovieById(id){
    //DEBUG
    console.log(`movie.service.js : retriving user with id: ${id}`)
    //QUERY
    const [rows] = await pool.query('SELECT * FROM movies WHERE id=?', [id]);
    return rows[0];
}
// TEST
// console.log(await getMovieById(1));