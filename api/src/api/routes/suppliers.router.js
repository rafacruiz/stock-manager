
import { Router } from "express";

import {
    createSupplier
} from '../controllers/suppliers.controller.js';

import { schemaValidator } from "../middlewares/errors.middleware.js";
import roleMiddleware from "../middlewares/role.middleware.js";

const supplierRouter = Router();

supplierRouter.post(
    '/',
    schemaValidator,
    roleMiddleware('admin'),
    createSupplier
);

export default supplierRouter;