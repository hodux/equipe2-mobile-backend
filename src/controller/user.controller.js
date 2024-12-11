import {createUser, getUserById, updateUser, deleteUserById} from "../service/user.service.js";

export default class UserController {
    async CreateUser(req, res) {
        let username = req.body.username;
        let email = req.body.email;
        let password = req.body.password;
        if (!username || !email || !password || !password) {
            let response = await createUser(username, email, password);
            if (response.flag) {
                res.status(201).send("User created successfully");
            } else {
                res.status(200).send("User already exists");
            }
        } else {
            res.status(400).send("Error with parameter");
        }


    }
}