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


export async function createUser(username, email, password){
    //DEBUG
    console.log(`Queries.js : creating user with email: ${email}, username: ${username} and password : ${password}`)
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
    console.log(`Queries.js : retriving user with id: ${id}`)
    //QUERY
    const [rows] = await pool.query('SELECT user_id, username, email FROM users where user_id=?', [id]);
    return rows[0];
}
//TEST
// console.log(await getUserById(1))
export async function login(usernameEmail, password){
    //DEBUG
    console.log(`Queries.js : authentificate with username or email: ${usernameEmail}`)
    //QUERY
    const [user] = await pool.query(`SELECT * FROM users WHERE (username=? OR email=?) AND password=?;`,[usernameEmail,usernameEmail,password])
    return user[0];
}
//TEST
//console.log(await login(bob, bob));
export async function updateUser(username, email, password, id){
    //DEBUG
    console.log(`Queries.js : update users with userData.id : ${id}`)
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
    console.log(`Database : delete users with id : ${id}`)
    //
    const status = await pool.query(`DELETE FROM users WHERE user_id = ?;`,[id])
    return Boolean(status[0].affectedRows);
}
//TEST
// console.log(await deleteUserById(1));