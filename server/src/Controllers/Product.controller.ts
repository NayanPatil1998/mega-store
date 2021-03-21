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

export const getProductById = async (req: Request, res: Response) => {

   try{
       const id = req.params.id;
       const product : IProductModel | null = await Product.findById({_id : id,},{},{},(err) => console.log(err))
       res.json(product)
   }
   catch (err){
       res.status(404).json(err.reason)
   }
}

export const getProductsByCategory = async (req: Request, res: Response) => {
    try{
        const category = req.params.category;
        const products: IProductModel[] = await Product.find({category: category}, (err) => console.error(err))
        res.status(200).json(products)
    }catch (error) {
        res.status(402).json(error)
    }
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