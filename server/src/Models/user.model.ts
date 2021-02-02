import Mongoose, { Document, Schema } from "mongoose";


 interface IAddress extends Document {
    street: string,
    state: string,
    pincode: number,
}

export interface IUser extends Document {
    name: string,
    email: string,
    uid: string,
    phone: number,
    addresses: [IAddress]
}


const addressSchema: Schema = new Mongoose.Schema({
    street: String,
    state: String,
    pincode: Number,
}) 

const userSchema: Schema = new Mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    uid: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },

    addresses: [addressSchema]
})


export default Mongoose.models.User || Mongoose.model<IUser>('User', userSchema, "Users")