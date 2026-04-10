
import mongoose from "mongoose";

const storeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    address: String,

    phone: String,

    email: String,

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

const Store = mongoose.model('Store', storeSchema);

export default Store;