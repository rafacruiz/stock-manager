
import createHttpError from "http-errors";

import Category from '../../models/category.model.js';

export const createCategory = async (req, res) => {

    const { name, description, active } = req.body;
  
    const category = Category.create({ 
        name, 
        description, 
        active 
    });

    await category.save();

    res.status(201).json(category);
};

export const getCategories = async (req, res) => {

    const categories =
      await Category.find();

    if (!categories) {
        throw createHttpError(404, 'Category not found');
    }

    res.json(categories);
};

export const getCategoryById = async (req, res) => {

    const category =
        await Category.findById(
            req.params.id
        );

    if (!category) {
        throw createHttpError(404, 'Categories not founds');
    }

    res.json(category);
};

export const updateCategory = async (req, res) => {

    const category =
        await Category.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
    
    if (!category) {
        throw createHttpError(404, 'Category not found');
    }

    res.json(category);
};

export const deleteCategory = async (req, res) => {

    await Category.findByIdAndDelete(
        req.params.id
    );

    res.status(204).end();
};