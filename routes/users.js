const express = require("express")
const router = express.Router()

router.get('/', (req, res, next) => {
    console.log('users')
    res.json({status: 200, message: "It works here!"})
});

module.exports = router