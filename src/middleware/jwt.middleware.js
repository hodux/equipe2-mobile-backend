import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

export const verifyToken = (req, res, next) => {
    try{
        const token = req.headers['authorization']?.split(' ')[1];
        if (!token) return res.status(403).send("Forbidden");
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded?.userID) return res.status(403).send("Forbidden: BAD TOKEN");
        if (decoded.userID != req.params.id) return res.status(409).send("Forbidden: NOT ALLOWED");
        if (decoded.userID == req.params.id) next();
    }catch (err){
        res.status(401).send("Forbidden: BAD TOKEN");
    }

}
