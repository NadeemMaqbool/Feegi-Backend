import express from "express";
const router = express.Router()

import {login, signup, logout} from "../controllers/AuthController"

router.post('/login', login);

export default router