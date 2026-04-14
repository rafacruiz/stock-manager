
import { Router } from "express";

import {
    createProduct
} from '../controllers/products.controller.js';

import { schemaValidator } from "../middlewares/errors.middleware.js";
import roleMiddleware from "../middlewares/role.middleware.js";

const productRouter = Router();

productRouter.post(
    '/',
    schemaValidator,
    roleMiddleware('admin'),
    createProduct
);

export default productRouter;