import express from "express";
import {allProducts} from "../Controllers/Product.controller";

const productRouter = express.Router()

productRouter.get("/products", allProducts)

export default  productRouter;