
import mongoose from "mongoose";

const pickingItemSchema = new mongoose.Schema({
    warehouseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Warehouse"
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },

    quantity: Number
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

const purchaseItemSchema = new mongoose.Schema({
    supplierId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Supplier"
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: Number
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

const distributionItemSchema = new mongoose.Schema({
    storeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Store"
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },

    order: Number,

    warehouse: Number,

    buy: Number
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

const logisticsBatchSchema = new mongoose.Schema({
    deliveryDate: Date,

    picking: [pickingItemSchema],

    purchase: [purchaseItemSchema],

    distribution: [distributionItemSchema],

    createBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
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

const LogisticsBatchSchema = mongoose.model('LogisticsBatch', logisticsBatchSchema);

export default LogisticsBatchSchema;