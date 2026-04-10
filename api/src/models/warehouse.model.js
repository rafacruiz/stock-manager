
import mongoose from "mongoose";

const warehouseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

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

const Warehouse = mongoose.model('Warehouse', warehouseSchema);

export default Warehouse;