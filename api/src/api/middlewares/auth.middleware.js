
import jwt from 'jsonwebtoken';

import User from '../../models/user.model.js';

import createHttpError from 'http-errors';

export const authMiddleware = async (req, res, next) => {

    const token = req.header('Authorization');
    if (!header) throw createHttpError(401, 'Unauthorized. No token provided.')

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        const user = await User.findById(decoded.id);
        if (!user) throw createHttpError(401, 'Invalid user');
        
        req.user = user;

        next();

    } catch (error) {
        throw createHttpError(401, 'Invalid token');
    }
};