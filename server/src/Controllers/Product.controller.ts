import {Request, Response} from "express";
import Product, {IProductModel} from "../Models/product.model";
import User, {IUser} from "../Models/user.model";

export const allProducts = async (req: Request, res: Response) => {
    const products : IProductModel[] = await Product.find({}, (err) => console.log(err))
    res.json(products);
}

export const featProducts = async(req: Request, res: Response) => {
    const products: IProductModel[] = await Product.find({"feat": true}, (err) => console.log(err))
    res.json(products);
}




export const addProduct = async (req: Request, res: Response) => {
    const { title, price,description, category, image, feat } = req.body;
    try {
        const product: IProductModel = new Product({
            title: title,
            price: price,
            description: description,
            category: category,
            image : image,
            feat: feat
        });

        product.save((err: any) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(product);
            }
        });
    } catch (err) {
        res.status(500).send(err.message);
    }
    //   res.json(user);
};