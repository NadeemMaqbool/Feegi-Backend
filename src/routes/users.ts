import express from "express"

const router = express.Router()

import {getAllUsers, getUserByUserId, storeUser} from '../controllers/UsersController'

router.get('/', getAllUsers);
router.get('/:id', getUserByUserId);
router.post('/', storeUser);

export default router