"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
require("dotenv/config");
const User_js_1 = require("../entities/User.js");
const sys = process.env;
const AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "rental_app",
    entities: [User_js_1.User],
    synchronize: true,
}).initialize().then(() => {
    console.log('\x1b[46m Database connected succesfully! \x1b[0m');
}).catch(err => {
    console.log("\x1b[41mError in database connection \x1b[0m", err);
});
exports.default = AppDataSource;
