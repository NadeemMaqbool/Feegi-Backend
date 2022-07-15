import { v4 as uuid } from 'uuid';
import { HttpError } from '../models/http-errors'
import bcrypt from 'bcrypt'
import { User} from '../entities/User';

export const getAllUsers = (req, res, next) => {
    return false
}

export const getUserByUserId = (req, res, next) => {
   return false
}

export const storeUser = async (req, res, next) => {
    const { email, password } = req.body
    
    if (!email.includes('@') || !email.includes('.')) {
        const error = new HttpError('Invalid email format', 400);
        return next(error);
    }

    if(password.length < 5) {
        const error = new HttpError('Password must be at least 5 characters', 400);
        return next(error);
    }

    const user = await User.findOne({ where: { email } })
        .then(
           async user => {
                if (user) {
                    const error = new HttpError( 'User already exists. Please use different email and try again.', 400)
                    next(error)
                }
                const { firstName, lastName, email, password, userType } = req.body
                const userCreate = User.create({
                    uuid: uuid(),
                    first_name: firstName,
                    last_name: lastName,
                    email,
                    password: await bcrypt.hashSync(password, 10),
                    user_type: userType
                })
                await userCreate.save().then(data => {
                    res.status(201).json({data})
                }).catch(err => {
                    next(err)
                })
        .catch(err => {
            throw new HttpError(err.message, 400)
        })
    })
}
