
import { Router } from "express";

import { 
    createOrder, 
    addItemToOrder, 
    confirmOrder, 
    closeOrders 
} from '../controllers/orders.controller.js'; 

import { schemaValidator } from '../middlewares/errors.middleware.js'
import roleMiddleware  from '../middlewares/role.middleware.js';

const orderRouter = Router();

orderRouter.post(
    "/orders",
    roleMiddleware("store", "admin"),
    createOrder
);

orderRouter.post(
    "/orders/:orderId/items",
    schemaValidator,
    roleMiddleware("store", "admin"),
    addItemToOrder
);

orderRouter.post(
    "/orders/:orderId/confirm",
    schemaValidator,
    roleMiddleware("store"),
    confirmOrder
);

orderRouter.post(
    "/orders/close",
    schemaValidator,
    roleMiddleware("admin"),
    closeOrders
);

export default orderRouter;