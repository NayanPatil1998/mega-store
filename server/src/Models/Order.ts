import Mongoose, { Schema, Document } from "mongoose";
import { IProductModel } from "./product.model";

export type CartItem = {
  product: IProductModel;
  quantity: number;
};
export interface IOrder extends Document {
  _id: string;
  orderId: string;
  status: string;
  amount: string;
  address: string;
  uid: string;
  products: CartItem[];
}

const OrderSchema: Schema = new Schema({
  orderID: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  products: {
    type: Array,
    required: true,
  },
  uid: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  date: {
    type: Number,
    required: true,
  },
});

const Order = Mongoose.model<IOrder>("Order", OrderSchema, "Orders");

export default Order;
