
import createHttpError from 'http-errors';

import Warehouse from '../../models/warehouse.model.js';

export const createWarehouse = async (req, res) => {
    
    const { name, address, active } = req.body;

    const warehouse = await Warehouse.create({
        name,
        address,
        active
    });

    if (!warehouse) throw createHttpError(404, 'Warehouse not found');

    await warehouse.save();

    res.status(201).json(warehouse);
};

export const getWarehouses = async (req, res) => {

    const warehouse = await Warehouse.find();

    if (!warehouse) throw createHttpError(404, 'Warehouse not found');

    res.json(warehouse);
};

export const deleteWarehouse = async (req, res) => {

    await Warehouse.findByIdAndDelete(
        req.params.id
    );

    res.status(204).end();
};