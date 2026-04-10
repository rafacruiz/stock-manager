
import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },

    quantityPrepared: {
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

const orderSchema = new mongoose.Schema({
    storeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Store",
        required: true
    },

    warehouseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Warehouse",
        required: true
    },

    state: {
        type: String,
        enum: [
            "draft",
            "pending",
            "confirmed",
            "preparing",
            "ready",
            "shipped",
            "cancelled"
        ],
        default: "draft"
    },

    items: [orderItemSchema],

    note: String,

    dateOrder: Date,

    dateSuccess: Date
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

orderSchema.index({ storeId: 1 });
orderSchema.index({ warehouseId: 1 });
orderSchema.index({ state: 1 });

const Order = mongoose.model('Order', orderSchema);

export default Order;