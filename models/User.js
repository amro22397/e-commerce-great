import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
    id: {
        type: String,
    },

    username: {
        type: String,
    },

    email: {
        type: String,
        unique: true,
    },

    emailVerified: {
        type: String,
    },

    password: {
        type: String,
    },

    image: {
        type: String,
    },

    hashedPassword: {
        type: String,
    },



    accounts: {
        type: Array,
    },

    orders: {
        type: Array,
    },

    reviews: {
        type: Array,
    },

    
    
}, { timestamps: true }
)

export const User = models?.User || model('User', UserSchema)