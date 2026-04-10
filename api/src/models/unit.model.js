
import mongoose from "mongoose";

const unitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    abbreviation: {
        type: String,
        required: true
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

const Unit = mongoose.model('Unit', unitSchema);

export default Unit;