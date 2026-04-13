
import { Router } from "express";

import { errorHandler, schemaValidator } from './middlewares/errors.middleware.js';

import authRoutes from "../routes/auth.router.js";

const apiRoute = Router();

apiRoute.use(schemaValidator);

apiRoute.use("/auth", authRoutes);

apiRoute.use(errorHandler);

export default apiRoute;