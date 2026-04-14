
import createHttpError from 'http-errors';

import Store from '../../models/store.model.js';

export const createStore = async (req, res) => {

    const { name, address, phone, active } = req.body;

    const store = await Store.create({
        name, 
        address, 
        phone, 
        active
    });

    await Store.save();

    res.status(201).json(Store);
};

export const getStores = async (req, res) => {

    const stores = await Store.find();

    if (!stores) throw createHttpError(404, 'Stores not found');

    res.json(stores);
};

export const deleteStore = async (req, res) => {

    await Store.findByIdAndDelete(
        req.params.id
    );

    res.status(204).end();
};