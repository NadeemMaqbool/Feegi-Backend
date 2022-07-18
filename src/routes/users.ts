import express from "express"

const router = express.Router()

import {getAllUsers, getUserByUserId} from '../controllers/UsersController'

router.get('/', getAllUsers);
router.get('/:uuid', getUserByUserId);

export default router