import Mongoose, { Document, Schema } from "mongoose";

export interface IProductModel extends Document{
    _id: string;
    title: string;
    price: number;
    description : string;
    category: string;
    image: string;
}

const productSchema : Schema = new Schema({
    title : {
        type:String,
        required: true
    },
    price : {
        type:Number,
        required: true
    },
    description : {
        type:String,
        required: true
    },
    category : {
        type:String,
        required: true
    },
    image : {
        type:String,
        required: true
    }
})

const Product = Mongoose.model<IProductModel>("Product", productSchema, "Products")
export default Product;