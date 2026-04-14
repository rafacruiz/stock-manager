
import Product from '../../models/product.model.js';

export const createProduct = async (req, res) => {

    const { 
        name, 
        description, 
        sku, 
        ean, 
        categoryId, 
        unitId, 
        supplierId, 
        price, 
        stockMin, 
        image, 
        active } = req.body;

    const product = await Product.create({
        name, 
        description, 
        sku, 
        ean, 
        categoryId, 
        unitId, 
        supplierId, 
        price, 
        stockMin, 
        image, 
        active
    });

    res.status(201).json(product);
};

export const deleteProduct = async (req, res) => {

    await Product.findByIdAndDelete(
        req.params.id
    );

    res.status(204).end();
};