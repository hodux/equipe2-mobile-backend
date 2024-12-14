import {createUser, getUserById, updateUser, deleteUserById, login} from "../service/user.service.js";


function passwordCheck(password){
    const regex = new RegExp('^.{8,}$');
    return regex.test(password);
}
export default class UserController {
    async CreateUser(req, res) {
        let username = req.body.username;
        let email = req.body.email;
        let password = req.body.password;
        if (username || email || passwordCheck(password)) {
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
    async GetUserByID(req, res) {
        let id = req.params.id;
        if (id) {
            let user = await getUserById(id);
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).send("User not found");
            }
        } else {
            res.status(400).send("Error with parameter");
        }
    }
    async Login(req, res) {
        let usernameEmail = req.body.usernameEmail;
        let password = req.body.password;
        if (usernameEmail || password) {
            let user = await login(usernameEmail, password);
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).send("User not found with these parameters");
            }
        } else {
            res.status(400).send("Error with parameter");
        }
    }

    async UpdateUser(req, res) {
        let id = req.params.id;
        let username = req.body.username;
        let password = req.body.password;
        let email = req.body.email;
        if (username || email || passwordCheck(password)) {
            let response = await updateUser(id, username, password);
            if (response.flag) {
                res.status(200).send("User updated successfully");
            }else{
                res.status(404).send("User could not be modified with these parameters");
            }
        }else{
            res.status(400).send("Error with parameter");
        }
    }
    async DeleteUser(req, res) {
        let id = req.params.id;
        if (id) {
            let status = await deleteUserById(id);
            if (status) {
                res.status(200).send("User deleted successfully");
            } else {
                res.status(404).send("User not found");
            }
        } else {
            res.status(400).send("Error with parameter");
        }
    }
}

