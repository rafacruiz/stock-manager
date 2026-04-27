
import jwt from 'jsonwebtoken';

import User from '../../models/user.model.js';

import createHttpError from 'http-errors';

export const authMiddleware = async (req, res, next) => {

    const authHeader = req.header('Authorization');
    if (!authHeader) throw createHttpError(401, 'Unauthorized. No token provided.');
    
    const token = authHeader.split(' ')[1];
    if (!token) throw createHttpError(401, 'Invalid format token.')

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