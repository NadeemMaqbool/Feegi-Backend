"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const UsersController_js_1 = require("../controllers/UsersController.js");
router.get('/', UsersController_js_1.getAllUsers);
router.get('/:id', UsersController_js_1.getUserByUserId);
router.post('/', UsersController_js_1.storeUser);
exports.default = router;
