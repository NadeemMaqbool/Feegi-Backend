const express = require("express")
const router = express.Router()

const userController = require('../controllers/UsersController.js')

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserByUserId);
router.post('/', userController.storeUser);


module.exports = router