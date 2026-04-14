
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
    '/',
    schemaValidator,
    roleMiddleware('admin'),
    createWarehouse
);

export default warehouseRouter;