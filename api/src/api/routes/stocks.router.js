
import { Router } from "express";

import { addStock } from '../controllers/stocks.controller.js';

import { schemaValidator } from "../middlewares/errors.middleware.js";
import roleMiddleware from "../middlewares/role.middleware.js";

const stockRouter = Router();

stockRouter.post(
    "/stocks/add",
    schemaValidator,
    roleMiddleware("admin"),
    addStock
);

export default stockRouter;