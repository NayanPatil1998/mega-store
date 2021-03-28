import Mongoose, { Document, Schema } from "mongoose";

export interface IProductModel extends Document {
  _id: string;
  title: string;
  price: number;
  description: Array<string>;
  category: string;
  image: string;
  date: Date;
  feat: boolean;
}

const productSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: Array,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  feat: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Product = Mongoose.model<IProductModel>(
  "Product",
  productSchema,
  "Products"
);
export default Product;
