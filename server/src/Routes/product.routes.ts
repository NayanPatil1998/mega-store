import express from "express";
import {
    addProduct,
    allProducts,
    featProducts,
    getProductById,
    getProductsByCategory
} from "../Controllers/Product.controller";

const productRouter = express.Router()

productRouter.get("/products", allProducts)

productRouter.get('/featproducts', featProducts)

productRouter.get("/product/:id", getProductById)

productRouter.post("/addproduct", addProduct)

productRouter.get("/products/:category", getProductsByCategory)

export default  productRouter;