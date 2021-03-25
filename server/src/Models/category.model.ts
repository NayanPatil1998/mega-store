import Mongoose, { Document, Schema } from "mongoose";

export interface ICategoryModel extends Document {
  _id: string;
  category: string;
  imageUrl: string;
}

const categorySchema: Schema = new Schema({
  category: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Category = Mongoose.model<ICategoryModel>(
  "Category",
  categorySchema,
  "Categories"
);
export default Category;
