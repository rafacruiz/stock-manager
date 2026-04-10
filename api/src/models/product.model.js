
import mongoose from "mongoose";

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

    supplier: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Supplier"
    }],

    price: {
        type: Number,
        default: 0
    },

    stockMin: {
        type: Number,
        default: 0
    },

    images: [{
        url: String,
        publicId: String
    }],

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

productSchema.index({ sku: 1 });
productSchema.index({ categoryId: 1 });

const Product = mongoose.model('Product', productSchema);

export default Product;