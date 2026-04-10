
import mongoose from "mongoose";

const stockSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },

    warehouseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Warehouse",
        required: true
    },

    quantity: {
        type: Number,
        default: 0
    },

    reserve: {
        type: Number,
        default: 0
    }
},
{
    timestamps: true,
    versionKey: false,
    toJSON: {
        virtuals: true,
        transform: function (doc, ret) {
            delete ret._id;
        },
    }
});


stockSchema.index({ 
    productId: 1, 
    warehouseId: 1 
},
{ unique: true });

const Stock = mongoose.model('Stock', stockSchema);

export default Stock;