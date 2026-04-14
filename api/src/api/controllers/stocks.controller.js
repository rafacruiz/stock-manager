
import Stock from '../../models/stock.model.js';

import StockMovement from '../../models/stockMovement.model.js';

export const addStock = async (req, res) => {

    const {
        productId,
        warehouseId,
        quantity
    } = req.body;

    let stock =
        await Stock.findOne({
            productId,
            warehouseId
        });

    if (!stock) {
        stock = Stock.create({
            productId,
            warehouseId,
            quantity
        });
    } else {
        stock.quantity += quantity;
    }

    await StockMovement.create({
        productId,
        warehouseId,
        type: "entrada",
        quantity,
        referenceType: "manual",
        userId: req.user.id
    });

    res.status(201).json(stock);
};