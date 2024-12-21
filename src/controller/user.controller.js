import {createUser, getUserById, updateUser, deleteUserById, login} from "../service/user.service.js";
import jwt from "jsonwebtoken";


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
                const token = jwt.sign({userID:response.user.user_id}, process.env.JWT_SECRET, {expiresIn: '1h'});
                res.status(200).json({
                    token,
                    id: response.user.user_id,
                    username: response.user.username,
                    email: response.user.email
                });
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
            if (user != null) {
                const token = jwt.sign({userID:user.user_id}, process.env.JWT_SECRET, {expiresIn: '1h'});
                res.status(200).json({
                    token,
                    id: user.user_id,
                    username: user.username,
                    email: user.email
                });

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
            let response = await updateUser(username,email, password, id);
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
    async Authenticate(req, res) {
        try {
            const token = req.headers['authorization']?.split(' ')[1];
            if (!token) return res.status(403).send('Forbidden');
             // Verify the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET); // Synchronous verification
            if (!decoded?.userID) {
                return res.status(409).json({ error: "Forbidden: badToken" });
            }
            console.log(decoded);
            res.status(200).json({
                id: decoded.userID,
            });
        } catch (error) {
            console.error('Error during authenticate: ', error);
            res.status(500).json({ error: 'Internal server error.' });
        }
    };
}

