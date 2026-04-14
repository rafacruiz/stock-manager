
import createHttpError from "http-errors";

import Supplier from '../../models/supplier.model.js';

export const createSupplier = async (req, res) => {

    const { name, phone, email, address, active } = req.body;

    const supplier = Supplier.create({
        name, 
        phone, 
        email, 
        address, 
        active
    });

    res.status(201).json(supplier);
};

export const getSuppliers = async (req, res) => {

    const suppliers = await Supplier.find();

    if (!suppliers) throw createHttpError(404, 'Supplier not found');

    res.json(suppliers);
};

export const deleteSupplier = async (req, res) => {

    await Supplier.findByIdAndDelete(req.params.id);

    res.status(204).end();
};