
import mongoose from "mongoose";

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

const distributionBatchSchema = new mongoose.Schema({
  deliveryDate: Date,

  items: [distributionItemSchema],
  
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

const DistributionBatch = mongoose
  .model('DistributionBatch', distributionBatchSchema);

export default DistributionBatch;