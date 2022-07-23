import { HttpError } from "../models/http-errors"
import jwt from 'jsonwebtoken';

export const checkAuth = (req, res, next) => {
    const token = req.headers.authentication.split(' ')[1] ///'Bearer token'
    try {
        if (!token) {
            const error = new HttpError('Authentication has failed', 401)
            return next(error)
        }
        const decodedToken = jwt.verify(token, process.env.JWT_KEY)
        req.user = decodedToken
        next() 
         
    }catch (err) {
        const error = new HttpError(err, 401);
        return next(error)
    }
}