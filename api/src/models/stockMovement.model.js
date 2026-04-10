
import mongoose from "mongoose";

const stockMovementSchema = new mongoose.Schema({
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

    type: {
        type: String,
        enum: [
            "entrada",
            "salida",
            "reserva",
            "liberacion",
            "ajuste"
        ],
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },

    referenceType: {
        type: String,
        enum: [
            "order",
            "purchase",
            "manual"
        ]
    },

    referenceId: {
        type: mongoose.Schema.Types.ObjectId
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    date: {
        type: Date,
        default: Date.now
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

stockMovementSchema.index({ productId: 1 });
stockMovementSchema.index({ warehouseId: 1 });

const StockMovement = mongoose.model('StockMovement', stockMovementSchema);

export default StockMovement;