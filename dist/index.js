"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const users_js_1 = __importDefault(require("./routes/users.js"));
const http_errors_js_1 = require("./models/http-errors.js");
require("./utils/db_connection.js");
require("reflect-metadata");
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use('/api/users', users_js_1.default);
//app.use('/api/property', propertyRoutes)
// middleware to handle unsupported routes
app.use((req, res, next) => {
    const error = new http_errors_js_1.HttpError("Couldn't find the given route", 404);
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.code || 500);
    return res.json({
        message: error.message || "An Unknown error has occurred"
    });
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});
exports.default = app;
