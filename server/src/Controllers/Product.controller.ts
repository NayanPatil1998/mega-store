import {Request, Response} from "express";
import Product, {IProductModel} from "../Models/product.model";

export const allProducts = async (req: Request, res: Response) => {
    const products : IProductModel[] = await Product.find({}, (err) => console.log(err))
    res.json(products);
}