import dotenv from "dotenv";

dotenv.config();

const mysqlPool = {
    host: process.env.MYSQL_HOST || '127.0.0.1',
    port: process.env.MYSQL_PORT || '3306',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'abc-123',
    database: process.env.MYSQL_DATABASE || 'howah',
}

export const config = {
    port: process.env.PORT || '8080',
    jwtSecret: process.env.JWT_SECRET || 'default',
    pool: mysqlPool
}