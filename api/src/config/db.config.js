
import mongoose from 'mongoose';

let MONGODB_URI;

if (process.env.NODE_ENV === "test") {
    MONGODB_URI = "mongodb://127.0.0.1:27017/stock_manager_test";
} else {
    MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/stock_manager";
}

mongoose
    .connect(MONGODB_URI)
    .then((db) => console.log(`MongoDB connected: ${db.connection.host}`))
    .catch((error) => console.error(`error MongoDB`, error));