import mysql from 'mysql2';
import bcrypt from 'bcryptjs';
import {config} from "../config/config.js";

const pool = mysql.createPool(config.pool).promise()

export async function createUser(username, email, password){
    password = bcrypt.hashSync(password, 10);
    //DEBUG
    console.log(`user.service.js : creating user with email: ${email}, username: ${username} and password : ${password}`)
    //QUERY
    const [check] = await pool.query(`SELECT id FROM users WHERE username=? or email=?`,[username,email])
    if(!check[0]){
        const [query] = await pool.query(`INSERT INTO users (username,email,password) VALUES (?,?,?);`,[username,email,password])
        const [rows] = await pool.query(`SELECT id, username, email FROM users WHERE username=? and email=?`,[username,email])
        return {
            "flag" :Boolean(query.affectedRows),
            "user": rows[0]
        }
    }
    return{
        "flag" : false,
        "user": null
    };
}
//TEST
// console.log(await createUser("a","a", "bob"));

export async function getUserById(id){
    //DEBUG
    console.log(`user.service.js : retriving user with id: ${id}`)
    //QUERY
    const [rows] = await pool.query('SELECT id, username, email FROM users where id=?', [id]);
    return rows[0];
}
//TEST
// console.log(await getUserById(1))
export async function login(usernameEmail, password){
    //DEBUG
    console.log(`user.service.js : authentificate with username or email: ${usernameEmail}`)
    //QUERY
    const [user] = await pool.query(`SELECT * FROM users WHERE (username=? OR email=?);`,[usernameEmail,usernameEmail]);
    if(user[0] !== undefined){
        if(await bcrypt.compareSync(password, user[0].password)){
            return user[0];
        }
    }
    return null;

}
//TEST
//console.log(await login(bob, bob));
export async function updateUser(username, email, id){
    //DEBUG
    console.log(`user.service.js : update users with userData.id : ${id}`)
    //QUERY
    const [rows] = await pool.query(`UPDATE users SET username = ?, email = ? WHERE id = ?;`,[username,email,id])
    return {
        "flag" :Boolean(rows.affectedRows),
        "user": rows[0]
    }
}
//TEST
//console.log(await updateUser(toto, toto@gmail.com, 1));
export async function deleteUserById(id){
    //DEBUG
    console.log(`user.service.js : delete users with id : ${id}`)
    //
    const status = await pool.query(`DELETE FROM users WHERE id = ?;`,[id])
    return Boolean(status[0].affectedRows);
}
//TEST
// console.log(await deleteUserById(1));
export async function updateUserFavoriteMovie(movieName, id){
    //DEBUG
    console.log(`user.service.js : update user's favorite movie with userData.id : ${id} and with the movie = ${movieName}`)
    //QUERY
    const [rows] = await pool.query(`UPDATE users SET favoriteMovie = ? WHERE id = ?;`,[movieName,id])
    return {
        "flag" :Boolean(rows.affectedRows),
        "user": rows[0]
    }
}
export async function getUserFavoriteMovieById(id){
    //DEBUG
    console.log(`user.service.js : retriving user's favorite movie with id: ${id}`)
    //QUERY
    const [rows] = await pool.query('SELECT favoriteMovie FROM users where id=?', [id]);
    return rows[0];
}
