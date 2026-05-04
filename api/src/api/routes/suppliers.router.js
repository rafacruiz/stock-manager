
import { Router } from "express";

import {
    createSupplier,
    getSuppliers,
    getSupplierById,
    updateSupplier,
    deleteSupplier
} from '../controllers/suppliers.controller.js';

import { schemaValidator } from "../middlewares/errors.middleware.js";
import roleMiddleware from "../middlewares/role.middleware.js";

const supplierRouter = Router();

supplierRouter.post(
    '/suppliers',
    schemaValidator,
    roleMiddleware('admin'),
    createSupplier
);

supplierRouter.get(
    '/suppliers',
    roleMiddleware('admin'),
    getSuppliers
);

supplierRouter.get(
    '/suppliers/:supplierId',
    roleMiddleware('admin'),
    getSupplierById
);

supplierRouter.patch(
    '/suppliers/:supplierId',
    roleMiddleware('admin'),
    updateSupplier
);

supplierRouter.delete(
    '/suppliers/:supplierId',
    roleMiddleware('admin'),
    deleteSupplier
)

export default supplierRouter;