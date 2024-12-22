import mysql from 'mysql2';
import dotenv from "dotenv";
import bcrypt from 'bcryptjs';
dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()


export async function createUser(username, email, password){
    password = bcrypt.hashSync(password, 10);
    //DEBUG
    console.log(`user.service.js : creating user with email: ${email}, username: ${username} and password : ${password}`)
    //QUERY
    const [check] = await pool.query(`SELECT user_id FROM users WHERE username=? or email=?`,[username,email])
    if(check.length === 0){
        const [query] = await pool.query(`INSERT INTO users (username,email,password) VALUES (?,?,?);`,[username,email,password])
        const [rows] = await pool.query(`SELECT user_id, username, email FROM users WHERE username=? and email=?`,[username,email])
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
    const [rows] = await pool.query('SELECT user_id, username, email FROM users where user_id=?', [id]);
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
export async function updateUser(username, email, password, id){
    //DEBUG
    console.log(`user.service.js : update users with userData.id : ${id}`)
    //QUERY
    const [rows] = await pool.query(`UPDATE users SET username = ?, email = ?, password = ? WHERE user_id = ?;`,[username,email,password,id])
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
    const status = await pool.query(`DELETE FROM users WHERE user_id = ?;`,[id])
    return Boolean(status[0].affectedRows);
}
//TEST
// console.log(await deleteUserById(1));
export async function updateUserFavoriteMovie(movieName, id){
    //DEBUG
    console.log(`user.service.js : update user's favorite movie with userData.id : ${id} and with the movie = ${movieName}`)
    //QUERY
    const [rows] = await pool.query(`UPDATE users SET favoriteMovie = ? WHERE user_id = ?;`,[movieName,id])
    return {
        "flag" :Boolean(rows.affectedRows),
        "user": rows[0]
    }
}
export async function getUserFavoriteMovieById(id){
    //DEBUG
    console.log(`user.service.js : retriving user's favorite movie with id: ${id}`)
    //QUERY
    const [rows] = await pool.query('SELECT favoriteMovie FROM users where user_id=?', [id]);
    return rows[0];
}
