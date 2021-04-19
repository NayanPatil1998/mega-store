import Mongoose, { Schema, Document} from "mongoose";
import {IProductModel} from "./product.model";

export type CartItem  = {
    product: IProductModel,
    quantity: number
}
export interface IOrder extends Document {
    _id: string,
    orderId: string,
    status: string,
    amount: string,
    products: CartItem[]
}


const OrderSchema: Schema = new Schema(
    {
        orderID: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        products :{
            type: Array,
            required: true
        },
        amount: {
            type: String,
            required : true
        },
        date: {
            type: Date,
            required: true
        }
    }
)

const Order = Mongoose.model<IOrder>(
    "Order",
    OrderSchema,
    "Orders"
);

export default Order;