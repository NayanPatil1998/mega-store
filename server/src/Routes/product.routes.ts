import express from "express";
import {addProduct, allProducts, featProducts, getProductById} from "../Controllers/Product.controller";

const productRouter = express.Router()

productRouter.get("/products", allProducts)

productRouter.get('/featproducts', featProducts)

productRouter.get("/product/:id", getProductById)

productRouter.post("/addproduct", addProduct)

export default  productRouter;