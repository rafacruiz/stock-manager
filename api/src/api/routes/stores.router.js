
import { Router } from "express";

import {
    createStore,
    getStores,
    deleteStore
} from '../controllers/stores.controller.js';

import { schemaValidator } from "../middlewares/errors.middleware.js";
import roleMiddleware from "../middlewares/role.middleware.js";

const storeRouter = Router();

storeRouter.post(
    '/stores',
    schemaValidator,
    roleMiddleware('admin'),
    createStore
);

storeRouter.get(
    '/stores',
    roleMiddleware('admin', 'store'),
    getStores
);

storeRouter.delete(
    '/stores/:storeId',
    roleMiddleware('admin'),
    deleteStore
)

export default storeRouter;