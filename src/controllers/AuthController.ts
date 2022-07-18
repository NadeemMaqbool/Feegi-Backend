import jwt from 'jsonwebtoken';
import { v4 as uuid } from 'uuid';
import bcrypt from 'bcrypt';
import { User } from '../entities/User';
import { HttpError } from '../models/http-errors';

export const signup = async (req, res, next) => {
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
                    return res.status(201).json({data})
                }).catch(err => {
                    next(err)
                })
        .catch(err => {
            throw new HttpError(err.message, 400)
        })
    })
}


export const login = async (req, res, next) => {
    const { email, password } = req.body;
    
    if (!email.includes('@') || !email.includes('.')) {
        const error = new HttpError('Invalid email format', 400);
        return next(error);
    }

    if(password.length < 5) {
        const error = new HttpError('Password must be at least 5 characters', 400);
        return next(error);
    }

    const user = await User.findOne({ where: { email } });
    if (!user || !bcrypt.compareSync(password, user.password)) {
        const error = new HttpError('Either email or password is wrong', 400);
        return next(error);
    }
    
    const token = jwt.sign({ email: user.email, uuid: user.uuid }, process.env.JWT_KEY, {'expiresIn': '1h'});
    res.status(200).json({ token: token, user: user});

}
export const logout = (req, res, next) => {}
