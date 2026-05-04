
import { Router } from "express";

import {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
} from '../controllers/products.controller.js';

import { schemaValidator } from "../middlewares/errors.middleware.js";
import roleMiddleware from "../middlewares/role.middleware.js";

const productRouter = Router();

productRouter.post(
    '/products',
    schemaValidator,
    roleMiddleware('admin'),
    createProduct
);

productRouter.get(
    '/products',
    roleMiddleware('admin'),
    getProducts
);

productRouter.get(
    '/products/:productId',
    roleMiddleware('admin'),
    getProductById
);

productRouter.patch(
    '/products/:productId',
    schemaValidator,
    roleMiddleware('admin'),
    updateProduct
);

productRouter.delete(
    '/products/:productId',
    schemaValidator,
    roleMiddleware('admin'),
    deleteProduct
);

export default productRouter;