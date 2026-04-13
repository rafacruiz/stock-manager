
import jwt from 'jsonwebtoken';

import createHttpError from 'http-errors';

import User from '../../models/user.model.js';

export const login = async (req, res) => {
    
    const { email, password } = req.body;

    if (!email || !password ) throw createHttpError(400, 'Fields required');

    const user = await User.findOne({
        email
    });

    if (!user) throw createHttpError(401, 'Unauthorized');

    const match = await user.checkPassword(password);

    if (!match) throw createHttpError(401, 'Invalid email or password');

    const token = jwt.sign({
        id: user.id
    },
    process.env.JWT_SECRET, {
        expiresIn: "7d"
    });

    res.json({
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
        },
        token
    });
};