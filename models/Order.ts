import { model, models, Schema } from "mongoose";

const OrderSchema = new Schema({
    id: {
        type: String,
    },

    userId: {
        type: String,
    },

    amount: {
        type: Number,
    },

    currency: {
        type: String,
    },

    status: {
        type: String,
    },

    deliveryStatus: {
        type: String,
    },

    CreateDate: {
        type: Date,
        default: Date.now,
    },

    paymentIntentId: {
        type: String,
        unique: true,
    },

    products: {
        type: Array,
    },

    address: {
        type: String,
    },
})

/* type Address {
    city: String,
    country: String,
    line1: String,
    line2: String,
    postal_code: String
} */

export const Order = models?.Order || model('Order', OrderSchema)