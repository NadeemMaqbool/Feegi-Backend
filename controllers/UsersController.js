const { v4: uuid} = require('uuid');
const HttpError = require('../models/http-errors')
const pool = require('../utils/db_connection');
const bcrypt = require('bcrypt');

module.exports.getAllUsers = (req, res, next) => {
    pool.query('select * from users', (err, results) => {
        if (err) {
            return next(new HttpError('Something went wrong, please try again', 500))
        }
            return res.status(200).json(results.rows)
        });
}

module.exports.getUserByUserId = (req, res, next) => {
    // @TODO Add logic here
    console.log("uuid", req.params.id)
    pool.query('select * from users where uuid = $1', [req.params.id], (err, results) => {
        if (err) {
            return next(new HttpError('Something went wrong, please try again', 500))
        }
            return res.status(200).json(results.rows)
        })
}

module.exports.storeUser = async (req, res, next) => {
    const { first_name, last_name, email, password } = req.body
    const salt = await bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hashSync(password, salt);

    pool.query(`insert into users (uuid, first_name, last_name, email, password, remember_token, is_verified, created_at, updated_at) 
                values ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
         [uuid(), first_name, last_name, email, hashedPassword, null, false, new Date(), null ], (err, results) => {
        if (err) {
            return next(new HttpError(`Something went wrong, ${err}`, 500))
        }   else {  
            return res.status(201).json({message: 'User created successfully'})
        }
    })
}
