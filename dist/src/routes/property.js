"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = require("../models/http-errors");
const router = express_1.default.Router();
const properties = [
    {
        id: 1,
        title: "Near Raja Bazar",
        price: 300,
        currency: 'EUR'
    },
    {
        id: 3,
        title: "Sadar rwp",
        price: 500,
        currency: 'PKR'
    },
];
router.get('/:pid', (req, res, next) => {
    const propertyList = properties.filter(property => {
        return property.id == parseInt(req.params.pid);
    });
    if (propertyList.length > 0) {
        return res.json({ property: propertyList });
    }
    const error = new http_errors_1.HttpError("The property id does not exist", 404);
    return error;
});
exports.default = router;
