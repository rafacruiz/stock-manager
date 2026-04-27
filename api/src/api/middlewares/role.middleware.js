
import createHttpError from "http-errors";

const roleMiddleware = (...roles) => {
    
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            throw createHttpError(403, 'Unauthorized');
        }

        next();
    }
};

export default roleMiddleware;