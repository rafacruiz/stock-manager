
import createHttpError from 'http-errors';

import Unit from '../../models/unit.model.js';

export const createUnit = async (req, res) => {

    const { name, abbreviation } = req.body;

    const unit = Unit.create({
        name,
        abbreviation
    });

    await unit.save();

    res.status(201).json(unit);
};

export const getUnits = async (req, res) => {

    const units = await Unit.find();

    if (!units) throw createHttpError(404, 'Units not found');

    res.json(units);
};

export const deleteUnit = async (req, res) => {
    
    await Unit.findByIdAndDelete(
        req.params.id
    );

    res.status(204).end();
};