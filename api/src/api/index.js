
import { Router } from "express";

import { errorHandler } from './middlewares/errors.middleware.js';

import { authMiddleware } from './middlewares/auth.middleware.js';

import authRoutes from "./routes/auth.router.js";
import categoryRouter from "./routes/category.router.js";
import stockRouter from "./routes/stock.router.js";
import warehouseRouter from './routes/warehouse.router.js';
import productRouter from './routes/product.router.js';
import supplierRouter from "./routes/suppliers.router.js";

const apiRoute = Router();

apiRoute.use(
    "/auth", 
    authRoutes
);

apiRoute.use(authMiddleware);

apiRoute.use(
    '/categories', 
    categoryRouter
);

apiRoute.use(
    '/warehouses',  
    warehouseRouter
);

apiRoute.use(
    '/products',  
    productRouter
);

apiRoute.use(
    '/stocks',
    stockRouter
);

apiRoute.use(
    '/suppliers',
    supplierRouter
);

apiRoute.use(errorHandler);

export default apiRoute;