
import { Router } from "express";

import {
    createCategory,
    getCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
} from '../controllers/categories.controller.js';

import { schemaValidator } from '../middlewares/errors.middleware.js'
import roleMiddleware  from '../middlewares/role.middleware.js';

const categoryRouter = Router();

categoryRouter.post(
    "/",
    schemaValidator,
    roleMiddleware("admin"),
    createCategory
);

categoryRouter.get(
    "/",
    getCategories
);

categoryRouter.get(
    "/:id",
    getCategoryById
);

categoryRouter.patch(
    "/:id",
    schemaValidator,
    roleMiddleware("admin"),
    updateCategory
);

categoryRouter.delete(
    "/:id",
    roleMiddleware("admin"),
    deleteCategory
);

export default categoryRouter;