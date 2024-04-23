import dotenv from "dotenv";
dotenv.config();

const Configs = {
    MONGODB_CONNECTION_STRING: process.env.MONGODB_CONNECTION_STRING ||'mongodb://localhost:27017/zenkit',
    CLIENT_APP: process.env.CLIENT_APP || 'http://localhost:5173',
    PORT: process.env.PORT ||3000,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
    JWT_REFRESH_EXPIRES_IN: process.env.JWT_REFRESH_EXPIRES_IN,
    JWT_REFRESH_COOKIE_NAME: process.env.JWT_REFRESH_COOKIE_NAME,
}

export default Configs;