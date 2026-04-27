
import mongoose from "mongoose";

const supplierRefSchema = new mongoose.Schema({
    supplierId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Supplier",
        required: true
    },
    mainSupplier: {
        type: Boolean,
        default: false
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

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    description: String,

    sku: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    ean: String,
    
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    unitId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Unit",
        required: true
    },
    suppliers: [
        supplierRefSchema
    ],
    price: {
        type: Number,
        default: 0
    },
    stockMin: {
        type: Number,
        default: 0
    },
    image: {
        url: String,
        publicId: String
    },
    active: {
        type: Boolean,
        default: true
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

productSchema.index({ categoryId: 1 });

const Product = mongoose.model('Product', productSchema);

export default Product;