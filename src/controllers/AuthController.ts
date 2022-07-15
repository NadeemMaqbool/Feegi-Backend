import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { User } from '../entities/User';
import { HttpError } from '../models/http-errors';

export const signup = (req, res, next) => {}
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
    
    const token = jwt.sign({ id: user.email }, process.env.JWT_KEY);
    res.status(200).json({ token: token, user: user });

}
export const logout = (req, res, next) => {}
