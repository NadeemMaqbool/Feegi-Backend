const { v4: uuid} = require('uuid');
const HttpError = require('../models/http-errors')

const getAllUsers = (req, res, next) => {
    
    throw new HttpError("Error, This is not complete", 404)
}

const getUserByUserId = (req, res, next) => {
    // @TODO Add logic here
    res.status(200).json({message: 'Get user by id'})
    next()
}

const storeUser = (req, res, next) => {
    const { name, email, address  } = req.body
    res.status(201).json({message: `User ${name} ${uuid()} stored successfully!`})
}

exports.getAllUsers = getAllUsers
exports.getUserByUserId = getUserByUserId
exports.storeUser = storeUser

