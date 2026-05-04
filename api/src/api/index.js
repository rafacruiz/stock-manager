
import { Router } from "express";

import { errorHandler } from './middlewares/errors.middleware.js';

import { authMiddleware } from './middlewares/auth.middleware.js';

import authRoutes from "./routes/auths.router.js";
import categoryRouter from "./routes/categories.router.js";
import stockRouter from "./routes/stocks.router.js";
import warehouseRouter from './routes/warehouses.router.js';
import productRouter from './routes/products.router.js';
import supplierRouter from "./routes/suppliers.router.js";
import storeRouter from "./routes/stores.router.js";
import orderRouter from "./routes/orders.router.js";

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

apiRoute.use(
    '/stores',
    storeRouter
);

apiRoute.use(
    '/orders',
    orderRouter
);

apiRoute.use(errorHandler);

export default apiRoute;