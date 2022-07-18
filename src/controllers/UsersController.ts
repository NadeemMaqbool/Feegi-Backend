import { v4 as uuid } from 'uuid';
import { HttpError } from '../models/http-errors'
import bcrypt from 'bcrypt'
import { User} from '../entities/User';

export const getAllUsers = (req, res, next) => {
    return false
}

export const getUserByUserId = (req, res, next) => {
    const {userId} = req.params.uuid;

    const user = User.findOne({ where: {uuid: userId }})
                    .then(async user => {
                        if (!user) {
                            const error = new HttpError('User does not exist', 404)
                            next(error)
                        }

                        return res.status(200).json({user})
                    }).catch(err => {
                        throw new HttpError(err.message, 400)
                    })
    
}


