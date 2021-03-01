import express from "express";
import {addProduct, allProducts, featProducts} from "../Controllers/Product.controller";

const productRouter = express.Router()

productRouter.get("/products", allProducts)

productRouter.get('/featproducts', featProducts)

productRouter.post("/addproduct", addProduct)

export default  productRouter;