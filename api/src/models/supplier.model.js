
import mongoose from "mongoose";

const supplierSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    phone: String,

    email: String,

    address: String,

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

const Supplier = mongoose.model('Supplier', supplierSchema);

export default Supplier;