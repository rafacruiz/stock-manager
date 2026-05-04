
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
    "/categories",
    schemaValidator,
    roleMiddleware("admin"),
    createCategory
);

categoryRouter.get(
    "/categories",
    getCategories
);

categoryRouter.get(
    "/categories/:categoryId",
    getCategoryById
);

categoryRouter.patch(
    "/categories/:categoryId",
    schemaValidator,
    roleMiddleware("admin"),
    updateCategory
);

categoryRouter.delete(
    "/categories/:categoryId",
    roleMiddleware("admin"),
    deleteCategory
);

export default categoryRouter;