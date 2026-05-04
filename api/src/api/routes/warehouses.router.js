
import { Router } from "express";

import {
    createWarehouse,
    getWarehouses,
    deleteWarehouse
} from '../controllers/warehouses.controller.js';

import { schemaValidator } from "../middlewares/errors.middleware.js";
import roleMiddleware from "../middlewares/role.middleware.js";

const warehouseRouter = Router();

warehouseRouter.post(
    '/warehouses',
    schemaValidator,
    roleMiddleware('admin'),
    createWarehouse
);

warehouseRouter.get(
    '/warehouses',
    roleMiddleware('admin'),
    getWarehouses
);

warehouseRouter.delete(
    '/warehouses/:warehousesId',
    roleMiddleware('admin'),
    deleteWarehouse
);

export default warehouseRouter;